const express = require('express');
const morgan = require ('morgan')

const app = express();

//connect to mongodb
URI = 'mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/capstone?retryWrites=true&w=majority'


//I have no idea.
app.get('/addLocations', (req, res) => {
  res.render('create',  { name: 'location'});
})

app.use((req, res) => {

  res.status(404).render('404', { name: '404' });

});