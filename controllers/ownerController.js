const db = require("../models");
const { findOneAndUpdate } = require("../models/owner");

module.exports = {
  findAll: function (req, res) {
    db.Owner.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.Owner.findOne({ user_id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Owner;
    findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Owner.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
