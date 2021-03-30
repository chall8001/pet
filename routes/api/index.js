const router = require("express").Router();
const ownerRoutes = require("./ownerRoutes");

router.use("/owner", ownerRoutes);

module.exports = router;
