import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'

interface Props {}
const SummaryPage = (props: Props) => {
  return (
    <ShopLayout title='Resumen de Orden' pageDescription='resumen de la orden'>
      <Typography variant='h1' component='h1'>
        Resumen de la orden
      </Typography>
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
                <Button className='circular-btn' color='secondary' fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default SummaryPage
