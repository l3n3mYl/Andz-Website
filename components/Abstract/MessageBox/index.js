import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/MessageBox.module.scss'

const MessageBox = props => {
  return (
    <div className={styles.MessageBox}>
      Ačiū už laišką!
    </div>
  )
}

MessageBox.propTypes = {}

export default MessageBox
