import Layout from '../components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/css/services.module.css'
import { getAuthorInfo, getAllServices } from '../lib/api'
import { PROJECT_ID, PROJECT_DATASET } from '../lib/constants'

const Paslaugos = ({ author, services }) => {
    const imgUrlBuilder = imageUrlBuilder({
        projectId: PROJECT_ID,
        dataset: PROJECT_DATASET
    })

    return (
        <Layout title="Paslaugos" author={author}>
          <div className={styles.projectsGrid}>
            {services.map((service, i) => {
              return (
                <div className={styles.singleProject} key={i}>
                  <div className={styles.projectInfo}>
                    <h2>{service.title}</h2>
                  </div>
                  <div className={styles.imageHover}>
                    <div className={styles.projectImg}>
                      <img src={imgUrlBuilder.image(service.image).width(1920).height(1080)} alt="" />
                    </div>
                    <div className={styles.serviceInfo}>
                        <p>{service.photoAmount} Nuotraukų</p>
                        <p>{service.hourAmount} h Nuostabiai praleisto laiko</p>
                        <p>Galimybė matyti savo nuotraukas čia</p>
                        <p className={styles.price}>{service.price} &euro;</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const author = await getAuthorInfo()
    const services = await getAllServices()
    return {
      props: { author, services },
      revalidate: 1
    }
}

export default Paslaugos