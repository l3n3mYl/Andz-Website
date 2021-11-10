import { getAllPostsForHome, getImageCarousel } from '../lib/api'
import styles from '../styles/css/main.module.css'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { PROJECT_ID, PROJECT_DATASET } from '../lib/constants'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'

export default function Index({ carouselItems, preview }) {
  const carousel = carouselItems[0].images

  const imgUrlBuilder = imageUrlBuilder({
    projectId: PROJECT_ID,
    dataset: PROJECT_DATASET
  })

  var counter = 1;

  // useEffect(() => {
  //   setInterval(() => {
  //     document.getElementById('radio'+counter).checked = true;
  //     counter++;
      
  //     if(counter > 5) {
  //         counter = 1;
  //     }
  //   }, 5000);

  // }, [])

  return (
    <>
      <div className={styles.outerDiv}>
        <Layout title="Home">
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
                          <img src={imgUrlBuilder.image(pic).width(800).height(600)} alt="" />
                        </div>
                      )
                    } else {
                      return (
                        <div className={styles.slide} key={i}>
                          <img src={imgUrlBuilder.image(pic).width(800).height(600)} alt="" />
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
          </div>
        </Layout>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const carouselItems = await getImageCarousel()
  return {
    props: { carouselItems, preview },
    revalidate: 1
  }
}
