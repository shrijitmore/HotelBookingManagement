const mongoose = require("mongoose")


const HotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type : {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String
        },
        distance: {
            type: String
        },
        photos: {
            type: [String]
        },
        title : {
            type: String,
            required: true
        },
        desc : {
            type: String,
            required: false
        },
        rating : {
            type: Number,
            min: 0,
            max: 5,
        },
        rooms : {
            type: [String],
        },
        cheapestPrice : {
            type: Number,
            required : true
        },
        featured : {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Hotel', HotelSchema)