import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { CartList } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

interface Props {}
const CartPage = (props: Props) => {
  return (
    <ShopLayout title='carrito - 3' pageDescription='carrito de compras de la tienda'>
      <Typography variant='h1' component='h1'>
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} md={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className='summary - card'>
            <CardContent>
              <Typography variant='h2'>Order</Typography>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ mt: 3 }}>
                <Button className='circular-btn' color='secondary' fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default CartPage
