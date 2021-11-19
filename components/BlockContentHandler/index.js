import React from 'react'
import classNames from 'classnames'
import client from "../../lib/sanity";
import styles from './styles/BlockContent.module.scss'
import SanityBlockContent from '@sanity/block-content-to-react'

const BlockContent = ({ blocks, className, ...others }) => (
  <div className={classNames(styles.content, className)}>
    <SanityBlockContent
      blocks={blocks}
      {...client.config()}
      {...others}
    />
  </div>
)

export default BlockContent
