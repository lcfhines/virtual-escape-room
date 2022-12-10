const { Schema, model } = require('mongoose');

const objectSchema = new Schema(
  {
    type: {   // 'char' or 'thing'
      type: String,
      required: true,
    },
    isWeapon: {   
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    room_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }
);

const Object = model('Object', objectSchema);

module.exports = Object;
