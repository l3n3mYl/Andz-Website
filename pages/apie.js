import Layout from '../components/Layout'
import { getAuthorInfo } from '../lib/api'
import styles from '../styles/scss/apie.module.scss'
import AnyImage from '../components/Handlers/ImageHandler/index'
import BlockContent from '../components/Handlers/BlockContentHandler/index'

const Apie = ({ author }) => {
  const { bio, image } = author

  return (
    <Layout title="Apie" author={author}>
      <div className={styles.Apie}>
        <AnyImage className={styles.authorImg} image={image} alt='' />
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