const { Schema, model } = require('mongoose');

const roomSchema = new Schema(
  {
    is_default: {
      type: Boolean,
      default: false,
    },
    room_id: {
      type: Number,
      required: true,
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
    objects: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Object'
      }
    ]

  }
);

const Room = model('Room', roomSchema);

module.exports = Room;
