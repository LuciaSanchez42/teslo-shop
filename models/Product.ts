import mongoose, { model, Model, Schema } from 'mongoose'
import { IProduct } from '../ts'

const ProductSchema = new Schema<IProduct>(
  {
    description: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    inStock: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    sizes: [
      {
        type: String,
        enum: {
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          message: '{VALUE} is not a valid size'
        }
      }
    ],
    slug: {
      type: String,
      required: true,
      unique: true
    },
    tags: {
      type: [String]
    },

    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: {
        values: ['shirts', 'pants', 'hoodies', 'hats'],
        message: '{VALUE} is not a valid type '
      }
    },
    gender: {
      type: String,
      enum: {
        values: ['men', 'women', 'kid', 'unisex'],
        message: '{{value}} is not a gener valid'
      }
    }
  },
  {
    timestamps: true
  }
)
const Product = mongoose.models.Product || model('Product', ProductSchema)
export default Product
