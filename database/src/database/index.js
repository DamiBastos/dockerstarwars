const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/env.js");

const conn = mongoose.createConnection(MONGO_URI);

// Planet.find()
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res));

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema.js")),
  Film: conn.model("Film", require("./schemas/filmSchema.js")),
  Planet: conn.model("Planet", require("./schemas/planetSchema.js")),
};
