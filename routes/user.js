const router = require('express').Router();
const { updateUser, deleteUser, getUser, getUsers } = require("../controllers/user");
const { verifyAdmin, verifyUser } = require("../middleware/verifyToken");


router.put("/:id",  updateUser)
router.delete("/:id",  deleteUser)
router.get("/:id",  getUser)
router.get("/",  getUsers)

module.exports = router