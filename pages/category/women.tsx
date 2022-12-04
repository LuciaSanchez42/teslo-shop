import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { Loading } from '../../components/custom'
import { ShopLayout } from '../../components/layouts'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=women')
  return (
    <ShopLayout title='Teslo shop - Women' pageDescription='los mejores productos para ellas'>
      <Typography variant='h1' component={'h1'}>
        Mujeres
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}
export default WomenPage
