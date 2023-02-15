import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
  {
    name: {type: String, required:true, maxlength: 100 },
    stars: {type: Number, required: true, default: 100}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)