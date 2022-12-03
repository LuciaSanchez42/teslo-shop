import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { initialData } from '../../database/products'
import { Product } from '../../models'

interface Data {
  name: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ name: 'Not allowed' })
  }
  await db.connect()
  await Product.deleteMany()
  await Product.insertMany(initialData.products)
  await db.disconnect()
  res.status(200).json({ name: 'Seed data successfully' })
}

export default handler
