const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose-connection");
const ownerRoutes = require("./routes/ownerRoutes");
const productRoutes = require("./routes/productRoutes");   
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/owner', ownerRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);


app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});