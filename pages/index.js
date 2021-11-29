import { useRouter } from 'next/router'
import React from 'react'
import Carousel from '../components/Animations/Carousel'
import Layout from '../components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/scss/main.module.scss'
import { PROJECT_ID, PROJECT_DATASET } from '../lib/constants'
import { getAuthorInfo, getImageCarousel, getAllProjects } from '../lib/api'

export default function Index({ carouselItems, author, projects }) {
  const carousel = carouselItems[0].images

  const imgUrlBuilder = imageUrlBuilder({
    projectId: PROJECT_ID,
    dataset: PROJECT_DATASET
  })

  // Use router to create div with onClick function
  const router = useRouter()

  return (
    <>
      <Layout title="Home" author={author} >
        <div className={styles.innerDiv}>
          <Carousel images={carousel} /> 
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => {
              return (
                <div onClick={() => router.push({pathname: `/galerija/${project.slug.current}`})} className={styles.singleProject} key={i}>
                  <div className={styles.imageHover}>
                    <div className={styles.projectImg}>
                      <img src={imgUrlBuilder.image(project.mainImage).width(1920).height(1080)} alt="" />
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const author = await getAuthorInfo()
  const projects = await getAllProjects()
  const carouselItems = await getImageCarousel()
  return {
    props: { carouselItems, author, projects },
    revalidate: 1
  }
}
