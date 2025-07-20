import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    
    category: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category = model('Category', categorySchema);
