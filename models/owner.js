const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: { type: String, required: true },
  petName: { type: String, required: true },
  location: { type: String, required: true },
  petType: { type: String, required: true },
  birthDay: { type: Date, required: true },
  hobbies: { type: String },
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
