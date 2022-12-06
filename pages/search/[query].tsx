import { Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import ProductList from '../../components/products/ProductList'
import { getProductbyTerm } from '../../database'
import { IProduct } from '../../ts'

interface Props {
  products: IProduct[]
}

const SearchPage: NextPage<Props> = ({ products }) => {
  return (
    <ShopLayout title='Teslo shop - Search' pageDescription='encuentra los mejores productos'>
      <Typography variant='h1' component={'h1'}>
        Buscar producto
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        ABC -- 123
      </Typography>
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
  // TODO: return others products
  return {
    props: {
      products
    }
  }
}
export default SearchPage
