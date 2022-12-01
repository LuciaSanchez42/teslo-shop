import { Box, Button } from '@mui/material'
import { FC } from 'react'
import { ISize } from '../../ts'

interface Props {
  sizeSelected: ISize
  sizes: ISize[]
}
const SideSelector: FC<Props> = ({ sizeSelected, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button key={size} size={'small'} color={sizeSelected === size ? 'primary' : 'info'}>
          {size}
        </Button>
      ))}
    </Box>
  )
}
export default SideSelector
