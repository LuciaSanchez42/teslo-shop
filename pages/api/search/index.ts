import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(404).json({ error: 'missing query' })
}
export default handler
