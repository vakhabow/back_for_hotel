const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
  },
  rented: {
    type: Boolean,
    default: false,
  },
  roomsCounter: {
    type: Number,
    required: true,
  },
  numberPerson: {
    type: Number
  },
  inside: String,
  outside: String
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
