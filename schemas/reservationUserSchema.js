const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    required: false,
    default: 100,
  },
});

module.exports = mongoose.model("reservationUser", itemModel);
