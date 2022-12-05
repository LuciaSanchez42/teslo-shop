import { Box, Button, Grid, Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { ItemCounter } from '../../components/custom'
import { ShopLayout } from '../../components/layouts'
import { ProductSlide, SideSelector } from '../../components/products'
import { dbProductBySlug } from '../../database'
import { IProduct } from '../../ts'

// const product = initialData.products[0]
interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
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
              <ItemCounter count={4} />
              <SideSelector sizeSelected={product.sizes[0]} sizes={product.sizes} />
            </Box>
            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>
            {/* <Chip label='No Hay Disponibles' color='error' variant='outlined' /> */}
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug = '' } = context.params as { slug: string }
  console.log(slug)
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
    }
  }
}
export default ProductPage
