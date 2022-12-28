const express = require("express");
const { signin } = require("../controllers/userController");
const userRouter = express.Router();
userRouter.post("/signin", signin);

module.exports = userRouter;
