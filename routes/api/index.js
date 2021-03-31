const router = require("express").Router();
const ownerRoutes = require("./owners");

router.use("/owners", ownerRoutes);

module.exports = router;
