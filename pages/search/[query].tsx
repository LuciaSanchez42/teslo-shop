import { Box, Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import ProductList from '../../components/products/ProductList'
import { gellAllProducts, getProductbyTerm } from '../../database'
import { IProduct } from '../../ts'

interface Props {
  products: IProduct[]
  foundProducts: boolean
  query: string
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout title='Teslo shop - Search' pageDescription='encuentra los mejores productos'>
      <Typography variant='h1' component={'h1'}>
        Buscar producto
      </Typography>
      {foundProducts ? (
        <Typography variant='h3' sx={{ mb: 1 }} textTransform={'capitalize'}>
          {products.length} productos encontrados con: {query}
        </Typography>
      ) : (
        <Box sx={{ mb: 1 }}>
          <Typography variant='h4' sx={{ mb: 1 }}>
            No se encontraron productos con el termino de busqueda: {query}
          </Typography>
          <Typography variant='h4' sx={{ mb: 1 }}>
            Intenta con otro termino de busqueda
          </Typography>
          <Typography variant='h5' sx={{ mb: 1 }}>
            O revisa nuestra lista de productos:
          </Typography>
        </Box>
      )}
      <ProductList products={products} />
    </ShopLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query = '' } = context.params as { query: string }
  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }
  let products = await getProductbyTerm(query)
  const foundProducts = products.length > 0
  if (!foundProducts) {
    products = await gellAllProducts()
  }
  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}
export default SearchPage
