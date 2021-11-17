import { node, number } from 'prop-types'
import classNames from 'classnames'
import React from 'react'

import styles from './styles/ResponsiveMedia.module.css'

const formatRatio = (paddingTop) => {
  return parseFloat((paddingTop * 100).toFixed(4))
}

/** 
 * Reserves a space on page for slow-loading resources, using the
 * supplied ratio. Avoids document reflow when child elements load.
 * Handles img, video as well as iframe for media
 * like embedded videos.
 */
const ResponsiveMedia = ({ children, className, paddingTop }) => (
  <div
    className={classNames(styles.ResponsiveMedia, className)}
    style={{ paddingTop: `${formatRatio(paddingTop)}%` }}
  >
    {children}
  </div>
)

ResponsiveMedia.propTypes = {
  children: node.isRequired,
  paddingTop: number.isRequired
}

export default ResponsiveMedia