// console.log("hello world");

const express = require("express");

const app = express();

const authRouter = require("./routes/auth")

// ------------------------------------
// 3) 

// const userRouter = require("./routes/user")


// ------------------------------------
// 2)
// dont env exporting and configuring before use

const dotenv = require("dotenv");

dotenv.config();

// ------------------------------------

const cors = require("cors");


app.use(cors({
  credentials:true,
  origin:'http://127.0.0.1:5173'
}))

// 2)

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL).then(()=>console.log("mongoDB connected")).catch((err)=>{console.log(err, "failed");})

// ------------------------------------
// 3)

// post man understand raw json
app.use(express.json())

app.use("/api/auth" , authRouter)





app.listen( process.env.PORT ||  5000, () => {
  console.log("server is running", 5000);
});
