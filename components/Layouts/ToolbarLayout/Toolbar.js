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
          <li><Link href='/galerija' ><a className={title=='Galerija' ? styles.highlight : null} >Galerija</a></Link></li>
          <li><Link href='/paslaugos' ><a className={title=='Paslaugos' ? styles.highlight : null} >Paslaugos</a></Link></li>
          <ImageLinkWrapper href='/' image='/logo1.png' className={styles.bigLogo} width={40} height={33} />
          <li><Link href='/apie' ><a className={title=='Apie' ? styles.highlight : null} >Apie</a></Link></li>
          <li><Link href='/kontaktai' ><a className={title=='Kontaktai' ? styles.highlight : null} >Kontaktai</a></Link></li>
        </ul>
      </nav>
      <label htmlFor={styles.menuToggle} className={styles.label}>
        <span />
      </label>
    </header>
  )
}

export default Toolbar