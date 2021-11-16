import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/css/toolbar.module.css'


const Toolbar = ({ title }) => {
    return (
        <header className={styles.header}>
            <Link href='/'><h1 className={styles.smallLogo}><Image src='/logo.png' width={75} height={60} /></h1></Link>
            <input type="checkbox" id={styles.menuToggle} className={styles.menuToggle} />
            <nav>
                <ul>
                    <li>{title==='Galerija' ? <Link href='/galerija'><a className={styles.highlight}>Galerija</a></Link> : <Link href='/galerija'><a className={styles.normal}>Galerija</a></Link>}</li>
                    <li>{title=='Paslaugos' ? <Link href='/paslaugos'><a className={styles.highlight}>Paslaugos</a></Link> : <Link href='/paslaugos'><a className={styles.normal}>Paslaugos</a></Link>}</li>
                    <Link href='/'><i className={styles.bigLogo}><Image src='/logo1.png' width={40} height={33} /></i></Link>
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