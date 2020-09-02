const express = require('express')
const cors = require('cors') 
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.port ||  4000;

app.use(cors());
app.use(express.json()); 

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once('open', () => {
console.log('mongoDB database connection established successfully')
})

const locationRouter = require('./routes/locations') 
// const usersRouter = require('./routes/users');


app.use('/allLocations', locationRouter)
//  app.use('/users', usersRouter); 

app.listen(port, () => {
console.log(`server is running on port: ${port}`)
})
