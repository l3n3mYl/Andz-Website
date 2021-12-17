import Layout from '../components/Layout'
import ContactForm from '../components/Layouts/ContactForm'
import { getAuthorInfo } from '../lib/api'

const Kontaktai = ({ author }) => {
  
  return (
    <Layout author={author} title='Kontaktai'>
      <ContactForm author={author} />
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

export default Kontaktai