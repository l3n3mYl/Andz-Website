import React from 'react'
import { array } from 'prop-types'
import classNames from 'classnames'
import styles from './styles/ProjectsLayout.module.scss'
import ImageLinkWrapper from '../../Abstract/ImageLinkWrapper'

const ProjectsLayout = ({ projects, className }) => {
  return (
    <div className={classNames(styles.ProjectsLayout, className)}>
      {projects.map((project) => {
        const id = project._id

        return (
          <div className={styles.Wrapper} key={id}>
            <div className={styles.imageHover}>
              <ImageLinkWrapper
                className={styles.img}
                image={project.mainImage} 
                href={`/galerija/${project.slug.current}`} 
              />
            </div>
            <div className={styles.info}>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ProjectsLayout.propTypes = {
  projects: array.isRequired,
}

export default ProjectsLayout
