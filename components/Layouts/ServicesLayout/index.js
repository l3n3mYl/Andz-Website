import React from 'react'
import { array, string } from 'prop-types'
import styles from './styles/ServicesLayout.module.scss'
import classNames from 'classnames'
import ImageHoverAnim from '../../Animations/ImageHoverAnim'

const ServicesLayot = ({ services, className }) => {

  return (
    <div className={classNames(styles.Services, className)}>
      {services.map((service, i) => {
        return (
          <div className={styles.card} key={i}>
              <h2>{service.title}</h2>
            <ImageHoverAnim className={styles.image} image={service.image}  >
              <p>{service.photoAmount} Nuotraukų</p>
              <p>{service.hourAmount} h Nuostabiai praleisto laiko</p>
              <p>Galimybė matyti savo nuotraukas čia</p>
              <h3>{service.price} &euro;</h3>
            </ImageHoverAnim>
          </div>
        )
      })}
    </div>
  )
}

ServicesLayot.propTypes = {
  services: array.isRequired,
  className: string,
}

export default ServicesLayot
