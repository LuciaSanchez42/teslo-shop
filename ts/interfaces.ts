export interface IProduct {
  _id: string
  description: string
  images: string[]
  inStock: number
  price: number
  sizes: ISize[]
  slug: string
  tags: string[]
  title: string
  type: ITypes
  gender: 'men' | 'women' | 'kid' | 'unisex'
  createdAt: Date
  updatedAt: Date
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type ITypes = 'shirts' | 'pants' | 'hoodies' | 'hats'
export interface CartItem {
  _id: string
  image: string
  price: number
  size: ISize
  slug: string
  title: string
  gender: 'men' | 'women' | 'kid' | 'unisex'
  quantity: number
}
