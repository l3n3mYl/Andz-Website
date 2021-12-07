import Head from 'next/head'
import Footer from './Layouts/FooterLayout/Footer'
import Toolbar from './Layouts/ToolbarLayout/Toolbar'

const Layout = ({ children, title, author }) => {

    return (
      <>
        <Head>
          <title> Andzelika JPG | {title}</title>
          <link rel="shortcut icon" href="icon.ico" />
        </Head>
        <Toolbar title={title} />
          {children}
        <Footer author={author} />
      </>
    )
}

export default Layout