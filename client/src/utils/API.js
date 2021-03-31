import axios from "axios";

export default {

  // gets all owners in DB
  getOwners: function() {
    return axios.get('/api/owners')
  },

  // gets 1 owners by their _id
  getOwner: function(id) {
    return axios.get('/api/owners/' + id);
  },

  // updates an owner according to their _id
  updateOwner: function(id) {
    return axios.put('/api/owners/' + id);
  },

  // saves a new owner into DB
  saveOwner: function (ownerData) {
    return axios.post("/api/owners", ownerData);
  },
};
