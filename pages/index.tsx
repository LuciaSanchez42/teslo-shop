import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { Loading } from '../components/custom'
import { ShopLayout } from '../components/layouts'
import ProductList from '../components/products/ProductList'
import { useProducts } from '../hooks'

const Home: NextPage = () => {
  const { products, isLoading } = useProducts('/products')
  return (
    <ShopLayout title='Teslo shop - home' pageDescription='encuentra los mejores productos'>
      <Typography variant='h1' component={'h1'}>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}
export default Home
