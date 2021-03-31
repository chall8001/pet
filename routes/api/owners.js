const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

router.route("/").post(ownerController.create);

module.exports = router;
