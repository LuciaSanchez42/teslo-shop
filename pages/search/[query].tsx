import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { Loading } from '../../components/custom'
import { ShopLayout } from '../../components/layouts'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'

const SearchPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products')
  return (
    <ShopLayout title='Teslo shop - Search' pageDescription='encuentra los mejores productos'>
      <Typography variant='h1' component={'h1'}>
        Buscar producto
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        ABC -- 123
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}
export default SearchPage
