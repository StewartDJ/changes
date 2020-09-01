const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addLocationsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String, required: true },
  imageUrl: { type: String, required: true },
  location: { type: Object, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  destinationState: { type: String, required: true },
  zipCode: { type: Number, required: true },

  indoors: { type: Boolean },
  familyFriendly: { type: Boolean },
});

const addLocations = mongoose.model("addLocations", addLocationsSchema);

module.exports = addLocations;
