const express = require("express");
const adminControllers = require("../controllers/admin");

const router = express.Router();

router.route("/login").get(adminControllers.getLogin);

module.exports = router;
