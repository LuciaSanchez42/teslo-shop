import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import NextLink from 'next/link'

interface Props {}
const Empty = (props: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems='center'
      height={'calc(100vh - 200px)'}
      sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
      <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography>Tu carrito está vacío</Typography>
        <NextLink
          href='/'
          style={{
            textDecoration: 'none'
          }}>
          <Box typography={'h4'} color='secondary'>
            Regresar
          </Box>
        </NextLink>
      </Box>
    </Box>
  )
}
export default Empty
