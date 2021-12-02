import React from 'react'
import styles from '../styles/scss/footer.module.scss'
import SocMedia from './Layouts/SocMedia'
import AuthorInfo from './Layouts/AuthorInfo'

const Footer = ({ author }) => {

  if( author !== 'none' ){
    return (
      <div className={styles.Footer}>
        <SocMedia author={author} className={styles.leftElement} />
        <AuthorInfo author={author} className={styles.rightElement} />
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Footer