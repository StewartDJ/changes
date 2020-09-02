// const router = require('express').Router();
// const TouristDestination = require("./models/addlocations.model");

// router.route("/").get((req, res) => {
//     TouristDestination.find()
//       .then((touristDestinations) => res.json(touristDestinations))
//       .catch((err) => res.status(400).json("Error: " + err));
//   });

// router.route('/add').post((req, res) => {
//     const name = req.body.name 
//     const description =  req.body.description
//     const website = req.body.website
//     const imageUrl = req.body.imageUrl
//     const location = req.body.location
//     const indoors = req.body.indoors
//     const familyFriendly = req.body.familyFriendly
//     const category = req.body.category
//     const zipCode  = Number(req.body.zipCode)
    
//     const location = new TouristDestination( (
//         {
//          name, 
//          description, 
//          website, 
//          imageUrl,
//          location,
//          indoors,
//          familyFriendly,
//          category,
//          zipCode  
//         }
//     )

//     location
//     .save()
//     .then(()=> {
//         res.json("Location added!")
//     })
//     .catch((err) => {res.status(400).json("Error: " + err)

//     })
// });

// router.route('/:id').get((req, res) => {  
//     TouristDestination.findById(req.params.id)  
//       .then(touristDestination => res.json(touristDestination))  
//       .catch(err => res.status(400).json('Error: ' + err));  
//   });  

//   router.route('/:id').delete((req, res) => {  
//     TouristDestination.findByIdAndDelete(req.params.id)  
//       .then(() => res.json('Tourist Destination deleted.'))  
//       .catch((err) => res.status(400).json('Error: ' + err));  
//   });  


// module.exports = router;

