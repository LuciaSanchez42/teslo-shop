import { LeanDocument } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../ts'

interface Data {
  products: IProduct[]
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getProduct(req, res)
    default:
      res.status(405).json({ message: 'Method not allowed' })
  }
}
const getProduct = async (req: NextApiRequest, res: NextApiResponse<IProduct[]>) => {
  const { gender = 'all' } = req.query
  let condition = {}
  if (gender !== 'all' && ['men', 'women', 'kid', 'unisex'].includes(gender.toString())) {
    condition = { gender }
  }
  await db.connect()
  const products = await Product.find(condition)
    .select('title price images inStock slug -_id')
    .lean<LeanDocument<IProduct[]>>()
  await db.disconnect()
  return res.status(200).json(products)
}
export default handler
