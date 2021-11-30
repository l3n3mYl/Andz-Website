import React from 'react'
import { object, string } from 'prop-types'
import styles from './styles/ServicesLayout.module.scss'
import classNames from 'classnames'
import AnyImage from '../../Handlers/ImageHandler/index'

const ServicesLayot = ({ services, className }) => {

  return (
    <div className={classNames(styles.Services, className)}>
      {services.map((service, i) => {
        return (
          <div className={styles.singleProject} key={i}>
            <div className={styles.projectInfo}>
              <h2>{service.title}</h2>
            </div>
            <div className={styles.imageHover}>
              <div className={styles.projectImg}>
                <AnyImage className={styles.img} image={service.image} alt={`Service#${i}`} />
              </div>
              <div className={styles.serviceInfo}>
                  <p>{service.photoAmount} Nuotraukų</p>
                  <p>{service.hourAmount} h Nuostabiai praleisto laiko</p>
                  <p>Galimybė matyti savo nuotraukas čia</p>
                  <p className={styles.price}>{service.price} &euro;</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ServicesLayot.propTypes = {
  services: object.isRequired,
  className: string,
}

export default ServicesLayot
