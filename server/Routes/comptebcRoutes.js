const express = require("express");
const comptebc = require("../Controllers/adminController");
const router = express.Router();

router.get("/", comptebc.getComptebc);
router.post("/", comptebc.creatComptebc);
router.delete("/id", comptebc.deleteComptebc);

module.exports = router;