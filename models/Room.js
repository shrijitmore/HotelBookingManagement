import { required } from "nodemon/lib/config"

const mongoose = require("mongoose")


const RoomsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price : {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: String,
            required: true
        },
        desc : {
            type: String,
            required: true
        },
        roomNumbers:[{
            number : Number,
            unavailableDates: {
                type: [Dates]
            }
        }],
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Rooms', RoomsSchema)