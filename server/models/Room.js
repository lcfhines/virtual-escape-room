const { Schema, model } = require('mongoose');

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
    game_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },

  }
);

const Room = model('Room', roomSchema);

module.exports = Room;
