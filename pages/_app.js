import '../styles/index.global.scss'
import Script from 'next/script'





function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
