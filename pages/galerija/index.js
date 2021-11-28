import Layout from '../../components/Layout'
import { getAuthorInfo, getAllProjects } from '../../lib/api'

import ProjectsLayout from '../../components/Layouts/ProjectsLayout'

const Galerija = ({ author, projects }) => {

  return (
    <Layout title="Galerija" author={author}>
      <ProjectsLayout 
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