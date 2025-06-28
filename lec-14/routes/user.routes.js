const express = require ("express");
const router = express.Router(); //express.Router() is a function provided by the Express.js framework.It creates a new router object — a mini version of your Express app that can handle routes (like GET, POST, etc.) and middleware separately.
const User = require("../models/user.model");
const { createUSer, getAllUsers } = require("../controllers/user.controller");

router.get("/create",createUSer);
router.get("/all",getAllUsers); 


// router.post();

module.exports = router;