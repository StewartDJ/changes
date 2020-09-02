const express = require("express");
// const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const TouristDestination = require("./models/addLocations.models");

//new toss if brokeen 
// const routes = require('./routes/api');
// //new toss if brokeen 


const dbURI =
  "mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/Capstone?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

  //new toss if brokeen 
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//new toss if brokeen 




//This chunk of code saves to the database

app.get("/add-location", (req, res) => {
  const location = new TouristDestination({
    name: "test addition",
    description: 'a place',
  website: 'somewhere',
  imageUrl: 'dunno',
  location: 'jlkjl',
  address: 'address',
  city: 'address',
  destinationState: 'address',
  zipCode: 789,
  });
  location.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
});

//this chunk of code gets from the database
app.get("/all-locations", (req, res) => {
  TouristDestination.find()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
})



// new trash if broken
// app.use(morgan('tiny'));
app.use('/all-locations', TouristDestination);
// app.listen(PORT, console.log(`Server is starting at ${PORT}`));
//new trash if broken



// //find a single blog
// app.get("/single-location", (req, res) => {
//   TouristDestination.findById(id)
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// })

// //routes, this sends to home page revise later
// app.get('/',  (req, res) => {
// res.redirect('/allLocations')
// })


// //location routes
// app.get('/allLocations', (req, res) => {
//   TouristDestination.find()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// })
