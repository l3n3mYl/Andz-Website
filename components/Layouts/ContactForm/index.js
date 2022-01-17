import React, { useState, useEffect } from 'react'
import MessageBox from '../../Abstract/MessageBox/index'
import styles from './styles/ContactForm.module.scss'
import { object } from 'prop-types'

const ContactForm = ({ author }) => {
  
  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  const [formValues, setformValues] = useState(emptyForm)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  function handleChange(e) {
    const {name, value} = e.target
    setformValues({ ...formValues, [name]: value })
  }

  function validate(values) {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(!values.message) {
      errors.message = "Message is required"
    }
    if(!values.email) {
      errors.email = "Email is required"
    } else if(!regex.test(values.email)) {
      errors.email = "Sorry we do not accept this form of email just yet"
    }
    if(!values.name) {
      errors.name = "Name is required"
    }
    
    return errors
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      sendMessage()
    }
  }, [formErrors])

  formValues['author'] = author
  async function sendMessage() {
    fetch('/api/mailer', {
      method: 'post',
      body: JSON.stringify(formValues),
    })
  }

  function validateFormInput(e) {
    e.preventDefault()
    setFormErrors(validate(formValues))
    if(!formErrors.length)
      setIsSubmit(true)
  }

  if(!isSubmit) {
    return (
      <form method='POST' onSubmit={validateFormInput} className={styles.ContactForm}>
        <input type="hidden" name="_captcha" value="false"/>
        <h2>Susisiekime!</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input id='name' type="text" name="name" value={formValues.name} onChange={handleChange}/>
              <label htmlFor='name' className={styles.text}>Vardas:</label>
              <span className={styles.line}></span>
            </div>
            <p className={formErrors && styles.error}>{formErrors.name}</p>
          </div>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
              <label htmlFor='email' className={styles.text}>El. Paštas</label>
              <span className={styles.line}></span>
            </div>
            <p className={formErrors && styles.error}>{formErrors.email}</p>
          </div>
        </ div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input id='subject' type="text" name="subject" value={formValues.subject} onChange={handleChange}/>
              <label htmlFor='subject' className={styles.text}>Tema:</label>
              <span className={styles.line}></span>
            </div>
            <p className={formErrors && styles.error}>{formErrors.subject}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.inputBox} id={styles.textArea}>
              <textarea id='textBox' type="text" name="message" value={formValues.message} onChange={handleChange}/>
              <label htmlFor='textBox' className={styles.text}>Žinutė:</label>
              <span className={styles.line}></span>
            </div>
            <p className={formErrors && styles.error}>{formErrors.message}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <input type="submit" value="Siųsti"/>
          </div>
        </div>
      </form>
    )
  } else {
    return (<div className={styles.ContactForm}><MessageBox /></div>)
  }
}

ContactForm.propTypes = {
  author: object.isRequired
}

export default ContactForm
