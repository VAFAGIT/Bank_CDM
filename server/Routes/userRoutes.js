const express = require("express");
const user = require("../Controllers/userController");
const router = express.Router();

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/", user.getusers);

module.exports = router;