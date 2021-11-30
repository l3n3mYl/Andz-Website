import Layout from '../components/Layout'
import { getAuthorInfo, getAllServices } from '../lib/api'
import ServicesLayot from '../components/Layouts/ServicesLayout'

const Paslaugos = ({ author, services }) => {

  return (
    <Layout title="Paslaugos" author={author}>
      <ServicesLayot services={services} />
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