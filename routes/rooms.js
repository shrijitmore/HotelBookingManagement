const router = require("express").Router()
const { createRoom, updateRoomAvailability } = require("../controllers/room")

router.post("/:hotelid", createRoom)
router.put("/availability/:id", updateRoomAvailability)

module.exports = router