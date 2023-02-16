import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId
export const PlanetSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 50},
    biome: {type: String, required: true, maxlength: 50 },
    atmosphere: {type: Boolean, required: true, default: false},
    galaxyId: {type: ObjectId, ref: 'Galaxy'}

  },
  { timestamps: true, toJSON: { virtuals: true } }

)

PlanetSchema.virtual('galaxy', {
  ref: 'Galaxy',
  justOne: true,
  localField: 'galaxyId',
  foreignField: '_id'
})