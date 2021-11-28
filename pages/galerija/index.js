import Layout from '../../components/Layout'
import { getAuthorInfo, getAllProjects } from '../../lib/api'

import ProjectsGrid from '../../components/Layouts/ProjectsGrid'

const Galerija = ({ author, projects }) => {

  return (
    <Layout title="Galerija" author={author}>
      <ProjectsGrid 
        projects={projects}
      />
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