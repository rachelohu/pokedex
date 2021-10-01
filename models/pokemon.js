const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a new Schema
// This will define the shape of the documents in the collection
// Recource: https://mongoosejs.com/docs/guide.html
const pokemonSchema = new Schema(
  {
    id: String,
    name: String,
    img: String,
    type: [String],
    stats: {},
    moves: {},
    damage: {},
    misc: {}
  }
);

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'tweets' collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// Resource: https://mongoosejs.com/docs/models.html

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;