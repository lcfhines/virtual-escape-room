const { Schema, model } = require('mongoose');
// used to encrypt password

const roomSchema = new Schema(
  {
    isDefault: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }
);

const Room = model('Room', gameSchema);

module.exports = Room;
