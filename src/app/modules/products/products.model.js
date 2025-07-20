import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    material: { type: Number, required: true, unique: true },
    barcode: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Product = model('Product', productSchema);
