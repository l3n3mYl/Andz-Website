import React from 'react'
import { object, string } from 'prop-types'
import styles from './styles/AuthorInfo.module.scss'
import classNames from 'classnames'

const AuthorInfo = ({ author, className }) => {
  return (
    <div className={classNames(styles.AuthorInfo, className)}>
      <p>{author.street}, <br />{author.city}, <br />{author.country}</p>
      <p>+{author.phone}</p>
    </div>
  )
}

AuthorInfo.propTypes = {
  author: object.isRequired,
  className: string
}

export default AuthorInfo
