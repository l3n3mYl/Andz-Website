import React from 'react'
import classNames from 'classnames'
import client from "../../lib/sanity";
import AnyImage from '../HandleImages/Image'
import styles from './ProjectsGrid.module.css'
import { string, array } from 'prop-types'
import SanityBlockContent from '@sanity/block-content-to-react'

const ProjectsGrid = ({ images, project, page, className }) => {

  const { 
    title,
    subtitle,
    body 
  } = project

  return (
    <div className={classNames(styles.content, className)}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <SanityBlockContent
        blocks={body}
        imageOptions={{ fit: "max" }}
        {...client.config()}
      />
      {images.map((image, i) => {
        return <AnyImage image={image} key={`#${page}+${i}`} alt=''/>
      })}
    </div>
  )
}

ProjectsGrid.propTypes = {
  images: array.isRequired,
  page: string.isRequired,
  title: string,
  subtitle: string,
}

export default ProjectsGrid
