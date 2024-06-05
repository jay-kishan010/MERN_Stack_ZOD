const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./utils/db");
const router=require("./routers/auth_router");
const errorMiddleware = require("./middlewares/error_middleware");

app.use(express.json());

app.use("/api/auth", router)

app.use(errorMiddleware)

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("hello from server side ");
    });
  })
  .catch((error) => {
    console.log(error);
  });


  