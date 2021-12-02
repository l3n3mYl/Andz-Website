import React from 'react'
import Link from 'next/link'
import { string, object } from 'prop-types'
import styles from './styles/SocMedia.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

const SocMedia = ({ author, className }) => {

  const { facebook, instagram, twitter, snapchat, hashtag } = author

  return (
    <div className={classNames(styles.SocMedia, className)}>
      <p>Follow: {hashtag}</p>
      <div className={styles.links}>
        <Link href={facebook} passHref ><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link href={instagram} passHref ><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link href={twitter} passHref ><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link href={snapchat} passHref ><FontAwesomeIcon icon={faSnapchat} /></Link>
      </div>
    </div>
  )
}

SocMedia.propTypes = {
  author: object.isRequired,
  className: string,
}

export default SocMedia
