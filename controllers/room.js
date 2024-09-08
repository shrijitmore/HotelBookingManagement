const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

module.exports.createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
            res.status(200).json(savedRoom)
        } catch (err) {
            next(err)
        }
    }catch(err){
        next(err)
    }
}

module.exports.updateRoomAvailability = async (req, res, next) => {
    try {
        const result = await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            { $push: { "roomNumbers.$.unavailableDates": req.body.dates } }
        );

        if (result.matchedCount === 0) {
            return next(createError(404, "Room not found"));
        }

        if (result.modifiedCount === 0) {
            return next(createError(400, "Room availability could not be updated"));
        }

        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
}

        