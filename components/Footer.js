import React from 'react'
import Link from 'next/link'
import styles from '../styles/scss/footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ author }) => {

  const {facebook, instagram, twitter, snapchat} = author

  if( author !== 'none' ){
    return (
      <div className={styles.mainDiv}>
        <div className={styles.socMedia}>
          <h3>Follow {author.hashtag}</h3>
          <div className={styles.links}>
            <Link href={facebook} passHref ><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link href={instagram} passHref ><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href={twitter} passHref ><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link href={snapchat} passHref ><FontAwesomeIcon icon={faSnapchat} /></Link>
          </div>
        </div>
        <div className={styles.info}>
          <p>{author.street}, <br />{author.city}, <br />{author.country}</p>
          <p>+{author.phone}</p>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Footer