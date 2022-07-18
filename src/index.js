const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//DATABASE
mongoose
  .connect(
    "mongodb+srv://Aastiksingh0984:AAStik27@cluster0.rpd4omz.mongodb.net/book-management?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

//ROUTES
app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});