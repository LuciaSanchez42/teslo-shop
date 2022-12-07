import { Box, Button } from '@mui/material'
import { FC } from 'react'
import { ISize } from '../../ts'

interface Props {
  sizeSelected: ISize | undefined
  sizes: ISize[]
  onSizeSelected: (size: ISize) => void
}
const SideSelector: FC<Props> = ({ sizeSelected, sizes, onSizeSelected }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size={'small'}
          color={sizeSelected === size ? 'primary' : 'info'}
          onClick={() => onSizeSelected(size)}>
          {size}
        </Button>
      ))}
    </Box>
  )
}
export default SideSelector
