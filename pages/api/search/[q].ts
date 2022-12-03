import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'

interface Data {}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case 'GET':
      return searchProducts(req, res)
    default:
      return res.status(405).end()
  }
}
const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = '' } = req.query
  if (!q) {
    return res.status(400).json({ error: 'Missing query' })
  }
  q = q.toString().toLocaleLowerCase()
  await db.connect()
  const products = await Product.find({
    $text: { $search: q }
  })
    .select('title images price inStock slug -_id')
    .lean()
  await db.disconnect()
  return res.status(200).json(products)
}
export default handler
