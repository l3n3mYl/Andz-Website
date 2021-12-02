import Head from 'next/head'
import Footer from './Layouts/FooterLayout/Footer'
import Toolbar from './Toolbar'

const Layout = ({ children, title, author }) => {

    return (
      <>
        <Head>
          <title> Andzelika JPG | {title}</title>
        </Head>
        <Toolbar title={title} />
          {children}
        <Footer author={author} />
      </>
    )
}

export default Layout