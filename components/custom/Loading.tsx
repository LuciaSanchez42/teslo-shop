import { Box, CircularProgress, Typography } from '@mui/material'

interface Props {}
const Loading = (props: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems='center'
      height={'calc(100vh - 200px)'}>
      <Typography sx={{ mb: 3 }} fontSize={20}>
        Cargando
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
export default Loading
