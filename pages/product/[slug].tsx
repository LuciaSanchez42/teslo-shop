import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { ItemCounter } from '../../components/custom'
import { ShopLayout } from '../../components/layouts'
import { ProductSlide, SideSelector } from '../../components/products'
import { dbProductBySlug, getAllProductsSlugs } from '../../database'
import { CartItem, IProduct, ISize } from '../../ts'

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [tempCartProduct, setTempCartProduct] = useState<CartItem>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1
  })
  const selectedSize = (size: ISize) => {
    setTempCartProduct({ ...tempCartProduct, size })
  }
  const onUpdatedQuantity = (quantity: number) => {
    setTempCartProduct({ ...tempCartProduct, quantity })
  }
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlide images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component={'h1'}>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' component={'h1'}>
              ${product.price}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter
                currentVal={tempCartProduct.quantity}
                updateValue={onUpdatedQuantity}
                maxValue={product.inStock > 5 ? 5 : product.inStock}
              />
              <SideSelector sizeSelected={tempCartProduct.size} sizes={product.sizes} onSizeSelected={selectedSize} />
            </Box>
            {product.inStock > 0 ? (
              <Button color='secondary' className='circular-btn'>
                {tempCartProduct.size ? (
                  <Typography variant='body1'>Agregar al Carrito</Typography>
                ) : (
                  <Typography variant='body1'>Selecciona un Tamaño</Typography>
                )}
              </Button>
            ) : (
              <Chip label='No Hay Disponibles' color='error' variant='outlined' />
            )}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
// ? no usar getServerSideProps en esta pagina
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug = '' } = context.params as { slug: string }
//   const product = await dbProductBySlug(slug)
//   if (!product) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }
export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await getAllProductsSlugs()
  const Slugs = productSlugs.map((product) => ({
    params: { slug: product.slug }
  }))
  return {
    paths: Slugs,
    fallback: 'blocking'
  }
}
// incremental static regeneration
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = '' } = context.params as { slug: string }
  const product = await dbProductBySlug(slug)
  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
export default ProductPage
