const express = require("express");
const app = express();

const connectDB = require("./utils/db");


connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("hello from server side ");
    });
  })
  .catch((error) => {
    console.log(error);
  });


  