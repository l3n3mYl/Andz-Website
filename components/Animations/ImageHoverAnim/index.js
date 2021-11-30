import React from 'react'
import { object, string, array } from 'prop-types'
import AnyImage from '../../Handlers/ImageHandler/index'
import styles from './styles/ImageHover.module.scss'
import classNames from 'classnames'

const ImageHoverAnim = ({ image, children, className }) => {

  return (
    <div className={classNames(styles.ImageHoverAnim, className)}>
        <AnyImage className={styles.img} image={image} alt='Image' />
      <div className={styles.serviceInfo}>
        {children}
      </div>
    </div>
  )
}

ImageHoverAnim.propTypes = {
  image: object.isRequired,
  children: array,
  className: string,
}

export default ImageHoverAnim
