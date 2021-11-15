import React, { useEffect, useRef } from 'react'
import styles from '../styles/css/scrollbar.module.css'

const Scrollbar = () => {

    // Use ref to get elements
    const scrollbar = useRef(null);
    const scrollPath = useRef(null);
  
    // Find current page height and display scrollbar based on the scrolled path
    useEffect(() => {
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        const onScroll = _ => {
            try {
                let progressHeight = (window.pageYOffset / totalHeight) * 100;
                scrollbar.current.style.height = progressHeight + "%"
            } catch (e) {
            }
        };

        window.addEventListener("scroll", onScroll);
    });
  
    return (
        <>
            <div ref={scrollbar} id='progressbar' className={styles.progressbar}/>
            <div ref={scrollPath} className={styles.scrollPath}/>
        </>
    )
};

export default Scrollbar;
