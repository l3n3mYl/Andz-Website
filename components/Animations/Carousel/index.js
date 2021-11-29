import React from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import AnyImage from '../../Handlers/ImageHandler/index'

import styles from './styles/Carousel.module.scss'

const Carousel = ({ images, className }) => {

  SwiperCore.use([
    Navigation, 
    Pagination,
    Autoplay
  ])

  return (
    <div>
      <Swiper 
        className={classNames(styles.Swiper, className)}
        autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }}
        pagination={{
          "dynamicBullets": true
        }}
        navigation={true}
        loop={true}
      >
        {images.map((pic, i) => {
          return <SwiperSlide className={styles.swiperSlide} key={pic._key}>
              <AnyImage className={styles.image} image={pic} alt={`CarouselImageNr${i}`} />
            </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default Carousel