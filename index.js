const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(cookieParser());


app.get("/", (req, res) => {
    const token = jwt.sign({ email: "raza@example.com" }, "secret");
    res.cookie("token",token);
    res.send("Welcome to the Home Page.")
});

app.get("/read",(req,res)=>{
    // console.log(req.cookies.token);
    const data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("Read")
});



app.listen(PORT, () => {
    console.log("Server is running on the PORT: ", PORT);
});