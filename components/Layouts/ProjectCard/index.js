import React from 'react'
import classNames from 'classnames'
import styles from './styles/ProjectCard.module.scss'
import BlockContent from '../../Handlers/BlockContentHandler';
import { string, array } from 'prop-types'
import AnyImage from '../../Handlers/ImageHandler/index'

const ProjectCard = ({ images, project, className }) => {

  const { 
    title,
    subtitle,
    body 
  } = project

  return (
    <div className={classNames(styles.content, className)}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {body && <BlockContent className={styles.body} blocks={body} />}
      {images.map((image) => {
        return <AnyImage image={image} key={image._key} className={styles.images} alt=''/>
      })}
    </div>
  )
}

ProjectCard.propTypes = {
  images: array.isRequired,
  title: string,
  subtitle: string,
}

export default ProjectCard
