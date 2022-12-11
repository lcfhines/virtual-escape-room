const { Schema, model } = require('mongoose');

const objectSchema = new Schema(
  {
    type: {   // 'Character' or 'Thing'
      type: String,
      required: true,
    },
    object_id: {
      type: String,
      required: true
    },
    is_weapon: {   
      type: Boolean,
      default: false,
    },
    room_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    interactions: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Interaction'
      }
    ]
  }
);

const Object = model('Object', objectSchema);

module.exports = Object;
