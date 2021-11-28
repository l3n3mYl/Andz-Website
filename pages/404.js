import Layout from '../components/Layout'
import BackgroundIconAnim from '../components/Animations/BackgroundIconAnim/index'
import ErrorMessage from '../components/ErrorMessage/index'

const Custom404 = () => {

  return (
    <Layout title="404 Not Found" author={'none'}>
      <ErrorMessage
        code='404'
        message='The page You are looking for was not found'
        redirect='home' 
      />
      <BackgroundIconAnim />
    </Layout>
  )
}

export default Custom404