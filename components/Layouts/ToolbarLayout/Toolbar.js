import Link from 'next/link'
import ImageLinkWrapper from '../../Abstract/ImageLinkWrapper'
import styles from './styles/Toolbar.module.scss'


const Toolbar = ({ title }) => {
    return (
      <header className={styles.Header}>
        <ImageLinkWrapper href='/' image='/logo.png' className={styles.smallLogo} width={65} height={55} />
        <input type="checkbox" id={styles.menuToggle} className={styles.menuToggle} />
        <nav>
          <ul>
            <li>{title==='Galerija' ? <Link href='/galerija'><a className={styles.highlight}>Galerija</a></Link> : <Link href='/galerija'><a className={styles.normal}>Galerija</a></Link>}</li>
            <li>{title=='Paslaugos' ? <Link href='/paslaugos'><a className={styles.highlight}>Paslaugos</a></Link> : <Link href='/paslaugos'><a className={styles.normal}>Paslaugos</a></Link>}</li>
            <ImageLinkWrapper href='/' image='/logo1.png' className={styles.bigLogo} width={40} height={33} />
            <li>{title=='Apie' ? <Link href='/apie'><a className={styles.highlight}>Apie</a></Link> : <Link href='/apie'><a className={styles.normal}>Apie</a></Link>}</li>
            <li>{title=='Kontaktai' ? <Link href='/kontaktai'><a className={styles.highlight}>Kontaktai</a></Link> : <Link href='/kontaktai'><a className={styles.normal}>Kontaktai</a></Link>}</li>
          </ul>
        </nav>
        <label htmlFor={styles.menuToggle} className={styles.label}>
          <span />
        </label>
      </header>
    )
}

export default Toolbar