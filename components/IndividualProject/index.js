import React from 'react'
import { client } from '../../lib/sanity'
import classNames from 'classnames'
import styles from './styles/IndividualProjectGrid.module.scss'
import BlockContent from '../BlockContentHandler';
import { string, array } from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image'
import NextImage from 'next/image'

const SanityImage = ({ image, alt, ...other }) => {
  const imageProps = useNextSanityImage(client, image)
  return <NextImage {...imageProps} alt={alt} {...other} />
}

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
        return <SanityImage image={image} key={`#${page}+${i}`} alt=''/>
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
