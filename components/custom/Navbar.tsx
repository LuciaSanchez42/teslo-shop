import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          style={{
            textDecoration: 'none',
            color: 'initial'
          }}>
          <Box display='flex' alignItems='center' sx={{ cursor: 'pointer' }}>
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>shop</Typography>
          </Box>
        </NextLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/men' passHref>
            <Button>Hombres</Button>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Button>Mujeres</Button>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Button>Niños</Button>
          </NextLink>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref>
          <IconButton>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>
        <Button variant='contained' sx={{ ml: 2 }}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
