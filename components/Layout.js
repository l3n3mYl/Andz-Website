import Head from 'next/head'
import Footer from './Layouts/FooterLayout/Footer'
import Toolbar from './Layouts/ToolbarLayout/Toolbar'

const Layout = ({ children, title, author }) => {

    return (
      <>
        <Head>
          <meta name="description" content="Photography Portfolio" />
          <meta name="author" content={author.name} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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