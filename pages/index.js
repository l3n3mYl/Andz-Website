import React from 'react'
import Carousel from '../components/Animations/Carousel'
import Layout from '../components/Layout'
import { getAuthorInfo, getImageCarousel, getAllProjects } from '../lib/api'
import ProjectsLayout from '../components/Layouts/ProjectsLayout'

export default function Index({ carouselItems, author, projects }) {
  const carousel = carouselItems

  return (
    <Layout title="Home" author={author} >
      <Carousel images={carousel} />
      <ProjectsLayout projects={projects} />
    </Layout>
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
