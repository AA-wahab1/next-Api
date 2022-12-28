const express = require("express");
var bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("hello");
});
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.0rjawsh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started on port no.5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
