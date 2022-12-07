import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined
} from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UiContext } from '../../context'

const SideMenu = () => {
  const { isMenuOpen, toggleMenu } = useContext(UiContext)
  const [search, setSearch] = useState<string>('')
  const onSearchChange = () => {
    if (search.trim().length > 0) {
      navigateTo(`/search/${search.trim()}`)
    }
  }
  const router = useRouter()
  const navigateTo = (path: string) => {
    toggleMenu()
    router.push(path)
  }
  return (
    <Drawer
      open={isMenuOpen}
      anchor='right'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={toggleMenu}>
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              autoFocus={true}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && onSearchChange()}
              type='text'
              placeholder='Buscar...'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={onSearchChange}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Perfil'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'Mis Ordenes'} />
          </ListItem>
          <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/men')}>
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Hombres'} />
          </ListItem>
          <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/women')}>
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Mujeres'} />
          </ListItem>
          <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/kid')}>
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary={'Niños'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={'Ingresar'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={'Salir'} />
          </ListItem>
          {/* TODO: Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={'Productos'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'Ordenes'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={'Usuarios'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default SideMenu
