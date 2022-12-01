import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

interface Props {}
const AddressPage = (props: Props) => {
  return (
    <ShopLayout title={'Direccion'} pageDescription={'Confirmar direccion del destino'}>
      <Typography variant='h1' component={'h1'}>
        Direccion
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Nombre' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Apellido' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Telefono' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Codigo Postal' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Direccion' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Segunda Direccion (Opcional)' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='country'>Pais</InputLabel>
            <Select labelId='country' label='Pais' value=''>
              <MenuItem value={1}>Mexico</MenuItem>
              <MenuItem value={2}>USA</MenuItem>
              <MenuItem value={3}>Canada</MenuItem>
              <MenuItem value={4}>España</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='filled' label='Ciudad' fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }} display='flex' justifyContent='center'>
        <Button color={'secondary'} className={'circular-btn'} size='large'>
          Revisar Pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}
export default AddressPage
