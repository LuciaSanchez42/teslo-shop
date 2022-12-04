import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { Loading } from '../../components/custom'
import { ShopLayout } from '../../components/layouts'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men')
  return (
    <ShopLayout title='Teslo shop - Women' pageDescription='los mejores productos para el'>
      <Typography variant='h1' component={'h1'}>
        Hombres
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}
export default MenPage
