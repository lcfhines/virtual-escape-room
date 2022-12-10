const { Schema, model } = require('mongoose');

const objectSchema = new Schema(
  {
    type: {   // 'Character' or 'Thing'
      type: String,
      required: true,
    },
    is_weapon: {   
      type: Boolean,
      default: false,
    },
    room_id: {
      type: Schema.Types.ObjectId,
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
