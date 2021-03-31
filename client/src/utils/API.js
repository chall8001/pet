import axios from "axios";

export default {
  saveOwner: function (ownerData) {
    return axios.post("/api/owners", ownerData);
  },
};
