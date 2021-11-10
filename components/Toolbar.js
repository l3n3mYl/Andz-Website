import styles from '../styles/css/toolbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Toolbar = ({ title }) => {

    return (
        <header className={styles.header}>
            <h1 className={styles.smallLogo}><Image src='/logo.png' width={100} height={100} /></h1>
            <input type="checkbox" id={styles.menuToggle} className={styles.menuToggle} />
            <nav>
                <ul>
                    <li>{title=='Galerija' ? <Link href='/galerija' className={styles.highlight}><a>Galerija</a></Link> : <Link href='/galerija' className={styles.normal}><a>Galerija</a></Link>}</li>
                    <li>{title=='Paslaugos' ? <Link href='/paslaugos' className={styles.highlight}><a>Paslaugos</a></Link> : <Link href='/paslaugos' className={styles.normal}><a>Paslaugos</a></Link>}</li>
                    <i className={styles.bigLogo}><Image src='/logo.png' width={100} height={100} /></i>
                    <li>{title=='Apie' ? <Link href='/apie' className={styles.highlight}><a>Apie</a></Link> : <Link href='/apie' className={styles.normal}><a>Apie</a></Link>}</li>
                    <li>{title=='Kontaktai' ? <Link href='/kontaktai' className={styles.highlight}><a>Kontaktai</a></Link> : <Link href='/kontaktai' className={styles.normal}><a>Kontaktai</a></Link>}</li>
                </ul>
            </nav>
            <label htmlFor={styles.menuToggle} className={styles.label}>
                <span />
            </label>
        </header>
    )
}

export default Toolbar