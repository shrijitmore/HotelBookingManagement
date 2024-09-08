const router = require( 'express' ).Router();
const { createHotel, getHotel, deleteHotel, getAllHotels, countByCity, countByType, getHotelRooms } = require("../controllers/hotel")

router.post("/", createHotel)
router.get("/:id", getHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)
router.delete("/:id", deleteHotel)
router.get("/", getAllHotels)

module.exports = router