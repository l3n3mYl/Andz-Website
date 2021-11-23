import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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

  const [_, incrCounter] = useState(2)

  useEffect(() => {
    const setNextSlide = setInterval(() => {
      incrCounter(prevCount => {
        document.getElementById('radio'+prevCount).checked = true
        prevCount++

        if(prevCount > 5) {
          prevCount = 1;
        }

        return prevCount
      })
    }, 5000)

    return () => clearInterval(setNextSlide)
  }, [])

  return (
    <>
      <Layout title="Home" author={author} >
        <div className={styles.innerDiv}>
          <div className={styles.slider}>
            <div className={styles.slides}>
              <input type="radio" name="radio-btn" id="radio1" className={styles.radio1} defaultChecked />
              <input type="radio" name="radio-btn" id="radio2" className={styles.radio2} />
              <input type="radio" name="radio-btn" id="radio3" className={styles.radio3} />
              <input type="radio" name="radio-btn" id="radio4" className={styles.radio4} />
              <input type="radio" name="radio-btn" id="radio5" className={styles.radio5} />
              {
                carousel.map(( pic, i ) => {
                  if( i==0 ) {
                    return (
                      <div className={styles.slide} id={styles.first} key={i}>
                        <img src={imgUrlBuilder.image(pic).width(1920).height(1080)} alt="" />
                      </div>
                    )
                  } else {
                    return (
                      <div className={styles.slide} key={i}>
                        <img src={imgUrlBuilder.image(pic).width(1920).height(1080)} alt="" />
                      </div>
                    )
                  }
                })
              }

              <div className={styles.navigationAuto}>
                <div className={styles.autoBtn1}></div>
                <div className={styles.autoBtn2}></div>
                <div className={styles.autoBtn3}></div>
                <div className={styles.autoBtn4}></div>
                <div className={styles.autoBtn5}></div>
              </div>

              <div className={styles.navigationManual}>
                <label htmlFor="radio1" className={styles.manualBtn} />
                <label htmlFor="radio2" className={styles.manualBtn} />
                <label htmlFor="radio3" className={styles.manualBtn} />
                <label htmlFor="radio4" className={styles.manualBtn} />
                <label htmlFor="radio5" className={styles.manualBtn} />
              </div>

            </div>
          </div>
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
