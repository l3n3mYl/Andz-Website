import Layout from '../components/Layout'
import { getAuthorInfo } from '../lib/api'
import styles from '../styles/scss/apie.module.scss'
import Image from '../components/ImageHandler/index'
import BlockContent from '../components/BlockContentHandler/index'

const Apie = ({ author }) => {
  const { bio, image } = author[0]

  return (
    <Layout title="Apie" author={author}>
      <div className={styles.authorInfo}>
        <Image className={styles.authorImg} image={image} alt='' />
        <BlockContent blocks={bio} className={styles.authorBio} />
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