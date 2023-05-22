const express   = require('express');
const app = express();
const dotenv    = require('dotenv');
const mongoose  = require('mongoose');


// const morgan    = require('morgan');
// const bodyPraser    = require('body-praser');

dotenv.config();
// db Connection
 mongoose.connect(
   process.env.DB_CONNECT,
   { useUnifiedTopology: true, useNewUrlParser: true },
   () => console.log("DB is connected successfully")
 );
// Import routes
const productRoutes = require("./routes/product");

// Middlewares
 app.use(express.json());
 //app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);
app.listen(4000, () => console.log("server is runing on port 4000!"));