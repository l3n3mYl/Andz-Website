import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/css/galerija.module.css'
import { getAuthorInfo, getAllProjects } from '../../lib/api'

import { PROJECT_ID, PROJECT_DATASET } from '../../lib/constants'

const Galerija = ({ author, projects }) => {

  const imgUrlBuilder = imageUrlBuilder({
      projectId: PROJECT_ID,
      dataset: PROJECT_DATASET
  })

  // Use router to create div with onClick function
  const router = useRouter()

  return (
    <Layout title="Galerija" author={author}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => {
          let id = project._id
          return (
            <Link href={`/galerija/${project.slug.current}`} passHref={true} key={id}>
              <div className={styles.singleProject}>
                <div className={styles.imageHover}>
                  <div className={styles.projectImg}>
                    <img src={imgUrlBuilder.image(project.mainImage).width(1920).height(1080)} alt="" />
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
    </Layout>
  )
}

export async function getStaticProps() {
    const author = await getAuthorInfo()
    const projects = await getAllProjects()
    return {
      props: { author, projects },
      revalidate: 1
    }
}

export default Galerija