import client from '../../lib/sanity'
import DefaultErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { getAuthorInfo } from '../../lib/api'
import { getAllProjects } from '../../lib/api'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/css/single_project.module.css'
import SanityBlockContent from '@sanity/block-content-to-react'
import { PROJECT_ID, PROJECT_DATASET } from '../../lib/constants'

import { useRouter } from 'next/router'
import Custom404 from '../404'

const SingleProject = ({ author, projects }) => {

    const router = useRouter()

    const imgUrlBuilder = imageUrlBuilder({
        projectId: PROJECT_ID,
        dataset: PROJECT_DATASET
    })

    // Check if window is defined to get the url
    let currentUrl = ''
    let currentProject = []
    if(typeof(window) !== 'undefined') currentUrl = window.location.pathname.split('/').at(-1)
    let projectExist = false

    // Find project by slug
    projects.map((project) => {
        if( project.slug.current===currentUrl) {
            projectExist = true
            currentProject = project
        }
    })
    
    return (
        projectExist 
        ? <Layout title={currentUrl} author={author}>
            <div className={styles.innerDiv}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{currentProject.title}</h1>
                    <h2 className={styles.subtitle}>{currentProject.subtitle}</h2>
                    {currentProject.body 
                        ? <div className={styles.body}>
                            <SanityBlockContent blocks={currentProject.body} imageOptions={{fit: 'max'}} {...client.config()}/>
                        </div> 
                        : <></>}
                    {currentProject.images.map((image, i) => {
                        return <div className={styles.photos} key={i}>
                                    <div className={styles.singleImage}>
                                        <img src={imgUrlBuilder.image(image).width(1920).height(1080)} alt="" />
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </Layout> 
        : <Custom404 />
    )
}



export async function getServerSideProps() {
    const author = await getAuthorInfo()
    const projects = await getAllProjects()
    return {
      props: { author, projects },
    }
}

export default SingleProject