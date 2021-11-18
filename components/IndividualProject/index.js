import React from 'react'
import classNames from 'classnames'
import AnyImage from '../HandleImages/Image'
import styles from './styles/IndividualProjectGrid.module.scss'
import BlockContent from '../BlockContentHandler';
import { string, array } from 'prop-types'

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
      <BlockContent
        className={styles.body}
        blocks={body}
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
