import { client } from '/lib/sanity'
import { number, string, oneOfType, object } from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image'
import classNames from 'classnames'
import NextImage from 'next/image'
import React from 'react'
import ResponsiveMedia from '../ResponsiveMediaHandler/index'

import styles from './styles/ImageHandler.module.scss'

const SanityImage = ({ image, alt, ...other }) => {
  const imageProps = useNextSanityImage(client, image)
  return <NextImage {...imageProps} alt={alt} {...other} />
}

const StaticImage = ({ image, alt, ...other }) => {
  return <NextImage src={image} alt={alt} {...other} />
}

/**
 * Component to handle all types images with ratio support
 */
const Image = ({ image, ratio, alt, className, src, ...other }) => {
  if (!image && !src) return null
  let imageEl
  if (src) {
    imageEl = <img src={src} alt={alt} {...other} loading="lazy" />
  } else if (typeof image === 'string') {
    imageEl = <StaticImage image={image} alt={alt} {...other} />
  } else if (image.asset) {
    imageEl = <SanityImage image={image} alt={alt} {...other} />
  } else {
    imageEl = <StaticImage image={image} alt={alt} {...other} />
  }

  if (ratio) {
    return (
      <ResponsiveMedia
        className={classNames(styles.Image, className)}
        ratio={ratio}
      >
        {imageEl}
      </ResponsiveMedia>
    )
  }

  return <div className={classNames(styles.Image, className)}>{imageEl}</div>
}

Image.propTypes = {
  image: oneOfType([string, object]).isRequired,
  ratio: number,
  alt: string,
  src: string
}

export default React.memo(Image)