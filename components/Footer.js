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
        window.location.assign(author.facebook)
    }

    const instagram = (e) => {
        e.preventDefault()
        window.location.assign(author.instagram)
    }

    const twitter = (e) => {
        e.preventDefault()
        window.location.assign(author.twitter)
    }

    const snapchat = (e) => {
        e.preventDefault()
        window.location.assign(author.snapchat)
    }

    if( author !== 'none' ){
        return (
            <div className={styles.mainDiv}>
                <div className={styles.socMedia}>
                    <h3>Follow {author.hashtag}</h3>
                    <div className={styles.links}>
                        <i onClick={facebook}><FontAwesomeIcon icon={faFacebook}/></i>
                        <i onClick={instagram}><FontAwesomeIcon icon={faInstagram}/></i>
                        <i onClick={twitter}><FontAwesomeIcon icon={faTwitter}/></i>
                        <i onClick={snapchat}><FontAwesomeIcon icon={faSnapchatGhost}/></i>
                    </div>
                </div>
                <div className={styles.info}>
                    <p>{author.street}, <br />{author.city}, <br />{author.country}</p>
                    <p>+{author.phone}</p>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default Footer