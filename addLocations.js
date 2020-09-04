const router = require('express').Router()

let location = require('../models/addLocations.models');

router.route('/').get((req,res) => {
       location.find()
        .then((addLocations) =>{res.json(addLocations)})
        .catch((err) => {
            console.log(err)
            res.status(400).json("Error:" + err)
        });
});

        router.route('/add').post((req,res) => {
            const name = req.body.name
                const description = req.body.description
                const website = req.body.website
                const imageUrl = req.body.imageUrl
                const address = req.body.address
                const city = req.body.city
                const destinationState = req.body.destinationState
                const zipCode = Number(req.body.zipCode)
                const newLocation = new Location (
                    {
                        name,
                        description,
                        website,
                        imageUrl,
                        address,
                        city,
                        destinationState,
                        zipCode,
                      }
                )

                newLocation
                .save()
                .then(() => {
                    res.json('Location added!')
                })
                .catch((err) => {
                    console.log(err)
                     res.status(400).json("Error:" + err)
                })
        });


        // add more routes
                router.route('/:id').get((req,res)=>{
                    location.findById(req.params.id)
                    .then((location) => {res.json(location)})
                    .catch((err) => {res.status(400).json("Error:" + err)
                    })
                 })

                
                 
        // end add more routes

        module.exports = router;