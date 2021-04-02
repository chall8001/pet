const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

router.route("/").get(ownerController.findAll).post(ownerController.create);

router.route("/:id").get(ownerController.findOne).put(ownerController.update);

module.exports = router;
