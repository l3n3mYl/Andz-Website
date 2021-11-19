import React from 'react'
import Link from 'next/link'
import { array } from 'prop-types'
import AnyImage from '../ImageHandler/index'
import styles from './styles/ProjectsGrid.module.scss'

function ProjectsGrid({ projects, className, ...others }) {
  return (
    <div className={styles.ProjectsGrid}>
      {projects.map((project) => {
        let id = project._id
        return (
          <Link href={`/galerija/${project.slug.current}`} passHref={true} key={id}>
            <div className={styles.imageDiv}>
              <div className={styles.imageHover}>
                <div className={styles.projectImg}>
                  <AnyImage image={project.mainImage} alt="" />
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

ProjectsGrid.propTypes = {
  projects: array.isRequired,
}

export default ProjectsGrid
