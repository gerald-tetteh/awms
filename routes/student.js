const express = require("express");
const studentControllers = require("../controllers/student");

const router = express.Router();

router.get("/login", studentControllers.getLogin);

module.exports = router;
