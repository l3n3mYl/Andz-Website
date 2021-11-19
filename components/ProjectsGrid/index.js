import React from 'react'
import Link from 'next/link'
import { array } from 'prop-types'
import classNames from 'classnames'
import AnyImage from '../ImageHandler/index'
import styles from './styles/ProjectsLayout.module.scss'

function ProjectsLayout({ projects, className }) {
  return (
    <div className={classNames(styles.ProjectsLayout, className)}>
      {projects.map((project) => {
        let id = project._id
        return (
          <div className={styles.projectDiv} key={id}>
            <div className={styles.imageHover}>
            <Link href={`/galerija/${project.slug.current}`} passHref={true}>
              <AnyImage className={styles.img} image={project.mainImage} alt="" />
            </Link>
            </div>
            <div className={styles.projectInfo}>
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
