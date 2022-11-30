import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo shop - home' pageDescription='encuentra los mejores productos'>
      <Typography variant='h1' component={'h1'}>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  )
}
export default Home
