const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const Mongoose = require("mongoose")

const port = process.env.RUNNING_PORT || 8080
Mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected to MongoDB Successfuly');
    app.listen(port,()=>{
        console.log(`Server Running on port ${port}`)
    })
  })
  .catch((err) => {
    console.log(err);
  });

