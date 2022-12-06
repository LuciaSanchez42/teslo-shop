import { LeanDocument } from 'mongoose'
import { db } from '.'
import { Product } from '../models'
import { IProduct } from '../ts'

export const dbProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await db.connect()
  const product = await Product.findOne({ slug }).lean()
  await db.disconnect()
  if (!product) return null
  return JSON.parse(JSON.stringify(product))
}
interface ProductSlug {
  slug: string
}
export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect()
  const slugs = await Product.find().select('slug -_id').lean<LeanDocument<ProductSlug[]>>()
  await db.disconnect()
  return slugs
}
