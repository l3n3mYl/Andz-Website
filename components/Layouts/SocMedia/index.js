import React from 'react'
import Link from 'next/link'
import { string, object } from 'prop-types'
import styles from './styles/SocMedia.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import ImageLinkWrapper from '../../Abstract/ImageLinkWrapper'

const SocMedia = ({ author, className }) => {

  const { facebook, instagram, twitter, snapchat, hashtag } = author
  
  return (
    <div className={classNames(styles.SocMedia, className)}>
      <p>Follow: {hashtag}</p>
      <div className={styles.links}>
        <ImageLinkWrapper href={facebook} icon={<FontAwesomeIcon icon={faFacebook} />} />
        <ImageLinkWrapper href={instagram} icon={<FontAwesomeIcon icon={faInstagram} />} />
        <ImageLinkWrapper href={twitter} icon={<FontAwesomeIcon icon={faTwitter} />} />
        <ImageLinkWrapper href={snapchat} icon={<FontAwesomeIcon icon={faSnapchat} />} />
      </div>
    </div>
  )
}

SocMedia.propTypes = {
  author: object.isRequired,
  className: string,
}

export default SocMedia
