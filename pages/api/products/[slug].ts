import { LeanDocument } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../ts'

interface Data {
  product: IProduct
}
const ProductPage = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res)
    default:
      return res.status(405).end()
  }
}
const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect()
  const { slug } = req.query
  const product = await Product.findOne({ slug }).lean<LeanDocument<IProduct>>()
  await db.disconnect()
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  return res.status(200).json(product)
}
export default ProductPage
