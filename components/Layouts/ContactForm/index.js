import React from 'react'
import styles from './styles/ContactForm.module.scss'

const ContactForm = _ => {

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if(!field.name) return

      formData[field.name] = field.value
    })
    fetch('/api/mailer', {
      method: 'post',
      body: JSON.stringify(formData),
    })
  }

  return (
    <form method='POST' onSubmit={handleSubmit} className={styles.ContactForm}>
      <input type="hidden" name="_captcha" value="false"/>
      <h2>Susisiekime!</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input id='name' type="text" name="name" required="required"/>
            <label htmlFor='name' className={styles.text}>Vardas:</label>
            <span className={styles.line}></span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input type="text" name="email" required="required"/>
            <label htmlFor='email' className={styles.text}>El. Paštas</label>
            <span className={styles.line}></span>
          </div>
        </div>
      </ div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input id='subject' type="text" name="subject" required="required"/>
            <label htmlFor='subject' className={styles.text}>Tema:</label>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox} id={styles.textArea}>
            <textarea id='textBox' type="text" name="message" required="required"/>
            <label htmlFor='textBox' className={styles.text}>Žinutė:</label>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <input type="submit" value="Siųsti"/>
        </div>
      </div>
    </form>
  )
}

ContactForm.propTypes = {}

export default ContactForm
