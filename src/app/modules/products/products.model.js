import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema(
  {
    material: { type: Number, required: true, unique: true },
    barcode: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: {
      type: Types.ObjectId,
      ref: 'Category',
      required: true,
      default: () => new Types.ObjectId('687d47d6054aec7924f51901'),
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Product = model('Product', productSchema);
