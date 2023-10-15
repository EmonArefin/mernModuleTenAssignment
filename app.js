const express = require("express");
const app = express();

const router = require("./src/routes/api");

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");


app.use(bodyParser.json());
app.use(cors());
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});

app.use(limiter);
app.use(helmet());
app.use(hpp());

const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("DataBase Connected"))
    .catch((error)=>{
        console.log(error);
    })

app.use("/api", router);

app.use("*", (req, res)=>{
    res.status(404).json({
        status: "Fail",
        data: "Data not found"
    })
});
    






module.exports = app;

