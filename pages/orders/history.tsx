import { Chip, Grid, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import NextLink from 'next/link'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Muestra informacion sobre el pago',
    width: 200,
    renderCell: (params) => {
      return params.value ? (
        <Chip color='success' label='Pagada' variant='outlined' />
      ) : (
        <Chip color='error' label='No Pagada' variant='outlined' />
      )
    }
  },
  {
    field: 'delivered',
    headerName: 'Entregado',
    description: 'Muestra informacion sobre la entrega',
    width: 200,
    renderCell: (params) => {
      return params.value ? (
        <Chip color='success' label='Entregada' variant='outlined' />
      ) : (
        <Chip color='error' label='No Entregada' variant='outlined' />
      )
    }
  },
  {
    field: 'total',
    headerName: 'Total',
    description: 'Muestra el total de la orden',
    width: 200,
    renderCell: (params) => {
      return <Typography>${params.value}</Typography>
    }
  },
  {
    field: 'createdAt',
    headerName: 'Fecha de Creacion',
    description: 'Muestra la fecha de creacion de la orden',
    width: 200,
    renderCell: (params) => {
      return <Typography>{params.value}</Typography>
    }
  },
  {
    field: 'details',
    headerName: 'Detalles',
    description: 'Muestra los detalles de la orden',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${params.id}`} style={{ color: 'inherit' }}>
          Ver Detalles
        </NextLink>
      )
    }
  }
]
const row = [
  { id: 1, paid: true, fullname: 'Hello' },
  { id: 2, paid: false, fullname: 'XGrid' },
  { id: 3, paid: true, fullname: 'Material-UI' },
  { id: 4, paid: true, fullname: 'Hello' },
  { id: 5, paid: true, fullname: 'XGrid' },
  { id: 6, paid: true, fullname: 'Material-UI' },
  { id: 7, paid: true, fullname: 'Hello' },
  { id: 8, paid: false, fullname: 'XGrid' },
  { id: 9, paid: true, fullname: 'Material-UI' },
  { id: 10, paid: true, fullname: 'Hello' },
  { id: 11, paid: true, fullname: 'XGrid' },
  { id: 12, paid: true, fullname: 'Material-UI' }
]
const History = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component='h1'>
        Historial de Ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid rows={row} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default History
