const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onlypets");

const ownerSeed = [
  {
    name: "Andrew",
    petName: "Lulu",
    location: "Denver, CO",
    petType: "Dog",
    birthDay: new Date("Feb 13, 2005"),
    hobbies: "Running, playing, laying in the sun",
  },
];

db.Owner.remove({})
  .then(() => db.Owner.collection.insertMany(ownerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
