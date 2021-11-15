import client from '../lib/sanity'
import Layout from '../components/Layout'
import { getAuthorInfo } from '../lib/api'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/css/apie.module.css'
import { PROJECT_ID, PROJECT_DATASET } from '../lib/constants'
import SanityBlockContent from '@sanity/block-content-to-react'

const Apie = ({ author }) => {
  let bio = author[0].bio

  const imgUrlBuilder = imageUrlBuilder({
      projectId: PROJECT_ID,
      dataset: PROJECT_DATASET
  })

  return (
      <Layout title="Apie" author={author}>
        <div className={styles.innerDiv}>
          <div className={styles.authorInfo}>
            <div className={styles.authorImg}>
              <img src={imgUrlBuilder.image(author[0].image)} alt="" />
            </div>
            <div className={styles.authorBio}>
              <SanityBlockContent blocks={bio} imageOptions={{fit: 'max'}} {...client.config()}/>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
    const author = await getAuthorInfo()
    return {
      props: { author },
      revalidate: 1
    }
}

export default Apie