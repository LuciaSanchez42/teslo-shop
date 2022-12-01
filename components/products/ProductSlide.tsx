import { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import styles from './ProductSlide.module.css'
import 'react-slideshow-image/dist/styles.css'

interface Props {
  images: string[]
}
const ProductSlide: FC<Props> = ({ images }) => {
  return (
    <Slide easing='ease' duration={7000} indicators>
      {images.map((image, index) => {
        const url = `/products/${image}`
        return (
          <div key={index} className={styles['each-slide']}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover'
              }}></div>
          </div>
        )
      })}
    </Slide>
  )
}
export default ProductSlide
