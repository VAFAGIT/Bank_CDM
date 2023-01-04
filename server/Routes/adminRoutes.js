const express = require("express");
const admin = require("../Controllers/adminController");
const router = express.Router();

router.get("/", admin.getAdmin);
router.post("/", admin.creatAdmin);
router.post("/login", admin.login);

module.exports = router;