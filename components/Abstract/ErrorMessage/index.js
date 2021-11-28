import React from 'react'
import Link from 'next/link'
import { string } from 'prop-types'
import styles from './styles/ErrorMessage.module.scss'

const ErrorMessage = ({ code, message, redirect }) => {

  return (
    <div className={styles.MessageBox}>
      <h1>{code}: {message}</h1>
      <h2>Go back to the <Link className={styles.link} href={redirect === 'home' ? '/' : `/${redirect}`}>{redirect}</Link> page</h2>
    </div>
  )
}

ErrorMessage.protoTypes = {
  code: string.isRequired,
  message: string.isRequired,
  redirect: string
}

export default ErrorMessage