const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

router.route("/api/create-profile").post(ownerController.create);

module.exports = router;
