import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { FC, useMemo, useState } from 'react'
import { IProduct } from '../../ts'
import NextLink from 'next/link'

interface Props {
  product: IProduct
}
const ProductCard: FC<Props> = ({ product }) => {
  const [hover, setHover] = useState(false)
  const productImage = useMemo(() => {
    return hover ? `products/${product.images[1]}` : `products/${product.images[0]}`
  }, [hover])

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={product.slug}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Card>
        <NextLink href={'/products/slug'} prefetch={false}>
          <CardActionArea>
            <CardMedia component={'img'} image={productImage} alt={product.title} className='fadeIn' />
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  )
}
export default ProductCard
