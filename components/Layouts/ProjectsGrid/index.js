import React from 'react'
import Link from 'next/link'
import { array } from 'prop-types'
import classNames from 'classnames'
import AnyImage from '../../Handlers/ImageHandler/index'
import styles from './styles/ProjectsLayout.module.scss'

const CustomComp = React.forwardRef(function CustomComp(props, ref) {

  const { slug, mainImage } = props.props

  return (
    <Link href={`/galerija/${slug.current}`}>
      <a ref={ref} >
        <AnyImage className={styles.img} src={mainImage} alt="" />
      </a>
    </Link>
  )
})

const ProjectsLayout = ({ projects, className }) => {
  return (
    <div className={classNames(styles.ProjectsLayout, className)}>
      {projects.map((project) => {
        let id = project._id
        return (
          <div className={styles.projectDiv} key={id}>
            <div className={styles.imageHover}>
              <CustomComp props={project} />
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
