import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { FunctionComponent, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UiContext } from '../../context'
import search from '../../pages/api/search'

const Navbar: FunctionComponent = () => {
  const { asPath, push } = useRouter()
  const { toggleMenu } = useContext(UiContext)
  const [search, setSearch] = useState<string>('')
  const [searchVisible, setSearchVisible] = useState<boolean>(false)
  const onSearchChange = () => {
    if (search.trim().length > 0) {
      push(`/search/${search.trim()}`)
    }
  }

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
        <Box sx={{ display: searchVisible ? 'none' : { xs: 'none', sm: 'block' } }} className='fadeIn'>
          <NextLink href='/category/men' passHref>
            <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
          </NextLink>
        </Box>
        <Box flex={1} />
        {searchVisible ? (
          <Input
            autoFocus={true}
            className='fadeIn'
            value={search}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && onSearchChange()}
            type='text'
            placeholder='Buscar...'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' onClick={() => setSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setSearchVisible(true)}
            className='fadeIn'
            sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <SearchOutlined />
          </IconButton>
        )}
        <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={toggleMenu}>
          <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref>
          <IconButton>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>
        <Button variant='contained' sx={{ ml: 2 }} onClick={toggleMenu}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
