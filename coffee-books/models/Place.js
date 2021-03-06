const { Schema, model } = require("mongoose")

const placeSchema = new Schema({
    name: String,
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    placeType: {
        type: String,
        enum: ['coffe shop', 'bookstore']
    }
}, {
    timestamps: true
})

placeSchema.index({ location: "2dsphere" })
module.exports = model("Place", placeSchema)