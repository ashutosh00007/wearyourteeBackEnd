require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//ROUTES IMPORT
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentbRoutes");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

//Testing
// app.get("/success",(req, res)=>{
//   res.json({
//     error: "no error"
//   })
// })


//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
  


//ROUTES



 
//PORTS
const port = process.env.PORT || 8000;

//SERVER LISTINING
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
