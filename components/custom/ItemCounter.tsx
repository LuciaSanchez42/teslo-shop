import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
  currentVal: number
  maxValue: number
  updateValue: (val: number) => void
}
const ItemCounter: FC<Props> = ({ currentVal, maxValue, updateValue }) => {
  const onAdd = (value: number) => {
    if (value === -1) {
      if (currentVal === 1) return
      return updateValue(currentVal - 1)
    }
    if (currentVal >= maxValue) return
    updateValue(currentVal + 1)
  }
  return (
    <Box display={'flex'} alignItems='center'>
      <IconButton onClick={() => onAdd(-1)}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>{currentVal}</Typography>
      <IconButton onClick={() => onAdd(+1)}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
export default ItemCounter
