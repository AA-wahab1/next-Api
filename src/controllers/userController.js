const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_key = "api";
const signin = async (req, res) => {
  console.log("🚀 ~ file: userController.js:4 ~ signin ~ req", req.body);
  const { username, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ username: username });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const matchPassword = password === existingUser.password;
    if (!matchPassword) {
      return res.status(400).json({ message: "invalid Credential" });
    }
    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      SECRET_key
    );
    res.status(202).json({ user: existingUser, token: token, message:"Successfully Logged in" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
module.exports = { signin };
