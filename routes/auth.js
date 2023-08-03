const express = require("express");
const router = express.Router();
const { createOrUpdateUser } = require("../controllers/authController");

router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
