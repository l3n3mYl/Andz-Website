import React from 'react'
import styles from './styles/Footer.module.scss'
import SocMedia from '../SocMedia'
import AuthorInfo from '../AuthorInfo'

const Footer = ({ author }) => {

  if( author !== 'none' ){
    return (
      <div className={styles.Footer}>
        <SocMedia author={author} className={styles.leftElement} />
        <AuthorInfo author={author} className={styles.rightElement} />
      </div>
    )
  } else {
    return null
  }
}

export default Footer