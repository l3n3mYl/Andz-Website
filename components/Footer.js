import React from 'react'
import styles from '../styles/css/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ author }) => {

    /**
    * Get authors soc media for the footer nav
    * 
    */
    const facebook = (e) => {
        e.preventDefault()
        window.location.assign(author[0].facebook)
    }

    const instagram = (e) => {
        e.preventDefault()
        window.location.assign(author[0].instagram)
    }

    const twitter = (e) => {
        e.preventDefault()
        window.location.assign(author[0].twitter)
    }

    const snapchat = (e) => {
        e.preventDefault()
        window.location.assign(author[0].snapchat)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.socMedia}>
                <h3>Follow {author[0].hashtag}</h3>
                <div className={styles.links}>
                    <i onClick={facebook}><FontAwesomeIcon icon={faFacebook}/></i>
                    <i onClick={instagram}><FontAwesomeIcon icon={faInstagram}/></i>
                    <i onClick={twitter}><FontAwesomeIcon icon={faTwitter}/></i>
                    <i onClick={snapchat}><FontAwesomeIcon icon={faSnapchatGhost}/></i>
                </div>
            </div>
            <div className={styles.info}>
                <p>{author[0].street}, <br />{author[0].city}, <br />{author[0].country}</p>
                <p>+{author[0].phone}</p>
            </div>
        </div>
    )
}

export default Footer