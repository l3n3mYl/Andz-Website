import Layout from '../components/Layout'
import { getAuthorInfo } from '../lib/api'
import styles from '../styles/css/kontaktai.module.css'

const Kontaktai = ({ author }) => {

  const emailField = `https://formsubmit.co/${author.email}`

  return (
    <Layout author={author} title='Kontaktai'>
      <div className={styles.content}>
        <div className={styles.body}>
          <form action={emailField} method='POST' className={styles.form}>
            <input type="hidden" name="_captcha" value="false"/>
            <h2>Susisiekime!</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.inputBox}>
                        <input type="text" name="name" required="required"/>
                        <span className={styles.text}>Vardas</span>
                        <span className={styles.line}></span>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.inputBox}>
                        <input type="text" name="email" required="required"/>
                        <span className={styles.text}>Email Adresas</span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </ div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.inputBox}>
                        <input type="text" name="_subject" required="required"/>
                        <span className={styles.text}>Tema</span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.inputBox} id={styles.textArea}>
                        <textarea type="text" name="message" required="required"/>
                        <span className={styles.text}>Žinutė</span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <input type="submit" value="Siųsti"/>
                </div>
            </div>
          </form>
        </div>
      </div>
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