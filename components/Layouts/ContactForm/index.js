import React from 'react'
import styles from './styles/ContactForm.module.scss'
import { string } from 'prop-types'

const ContactForm = ({ email }) => {
  return (
    <form action={email} method='POST' className={styles.ContactForm}>
      <input type="hidden" name="_captcha" value="false"/>
      <h2>Susisiekime!</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input type="text" name="name" required="required"/>
            <span className={styles.text}>Vardas</span>
            <span className={styles.line}></span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input type="text" name="email" required="required"/>
            <span className={styles.text}>Email Adresas</span>
            <span className={styles.line}></span>
          </div>
        </div>
      </ div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input type="text" name="_subject" required="required"/>
            <span className={styles.text}>Tema</span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.inputBox} id={styles.textArea}>
            <textarea type="text" name="message" required="required"/>
            <span className={styles.text}>Žinutė</span>
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

ContactForm.propTypes = {
  email: string.isRequired,
}

export default ContactForm
