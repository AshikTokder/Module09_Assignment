const express = require('express');
const router = require('./src/Routes/api');
const app = new express();

const RateLimit = require('express-rate-limit');
const Helmet = require('helmet');
const MongoSanitize = require('express-mongo-sanitize');
const XSS =  require('xss-clean');
const HPP = require('hpp');
const CORS = require('cors');
const Mongoose = require('mongoose');
// const Validator = require('validator');

// app.use(Validator())
app.use(CORS())
app.use(HPP())
app.use(XSS())
app.use(MongoSanitize())
app.use(Helmet())

const Limiter = RateLimit({
    windowMs:15*60*1000,
    max:100
});
app.use(Limiter)


app.use("/api/v1/",router)
app.use("*",(req,res)=>{
    res.status(404).json({staus:"Fail",data:"Not Found"})
})
module.exports=app;

