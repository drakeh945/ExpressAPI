const express = require("express");
const chirpsRouter = require("./chrips");
const userRouter = request("./users");

let router = express.Router();

router.use("/chirps,", chirpsRouter);
router.use("/users", usersRouter);

module.exports = router;
