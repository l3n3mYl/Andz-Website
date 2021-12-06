import React from 'react'
import Link from 'next/link'
import AnyImage from '../../Handlers/ImageHandler/index'
import { object, string, number, oneOfType } from 'prop-types'

/*
 * Avoids ref error when image is wrapped with Link el
 */
const ImageLinkWrapper = ({ image, icon, href, className, width, height }) => {

  const CustomComp = React.forwardRef(function CustomComp(props, ref) {
    return (
      image 
      ? <Link href={href} >
          <a ref={ref} >
            <AnyImage
              className={className}
              width={width ? width : null}
              height={height ? height : null}
              src={image} alt=""
            />
          </a>
        </Link> 
      : <Link innerRef={ref} href={href} passHref ><a ref={ref} >{icon}</a></Link>
      )
    })

  return (
    <CustomComp />
  )
}

ImageLinkWrapper.propTypes = {
  image: oneOfType([string, object]),
  icon: object,
  href: string.isRequired,
  className: string,
  width: number,
  height: number
}

export default ImageLinkWrapper
