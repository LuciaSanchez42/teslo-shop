import { Grid, Typography } from '@mui/material'

interface Props {}
const OrderSummary = (props: Props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>${184.69}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos 15%</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>$32.74</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography variant='subtitle1'>$200.20</Typography>
      </Grid>
    </Grid>
  )
}
export default OrderSummary
