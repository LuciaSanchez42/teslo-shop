import { LeanDocument } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../ts'

interface Data {
  products: IProduct[]
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case 'GET':
      return getProduct(req, res)
    default:
      res.status(405).json({ message: 'Method not allowed' })
  }
}
const getProduct = async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect()
  const products = await Product.find({})
    .select('title price images inStock slug -_id')
    .lean<LeanDocument<IProduct[]>>()
  await db.disconnect()
  return res.status(200).json(products)
}
export default handler
