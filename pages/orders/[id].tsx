import { Typography, Grid, Card, CardContent, Divider, Box, Button, Chip } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

interface Props {}
const OrderPage = (props: Props) => {
  return (
    <ShopLayout title='Resumen de la Orden 481945' pageDescription='resumen de la orden'>
      <Typography variant='h1' component='h1'>
        Order 481945
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label='Pendiente de Pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip sx={{ my: 2 }} label='Orden Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined />} />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
                <Typography variant='subtitle1'>Direccion de Entrega</Typography>
                <NextLink href={'/checkout/address'} style={{ textDecoration: 'none' }}>
                  Editar
                </NextLink>
              </Box>
              <Typography>Herminia Steward</Typography>
              <Typography> 5072 E North St</Typography>
              <Typography>Melbourne, Victoria</Typography>
              <Typography>Australia</Typography>
              <Typography>0480627994</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>
                <NextLink href={'/cart'} style={{ textDecoration: 'none' }}>
                  Editar
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default OrderPage
