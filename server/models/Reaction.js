const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
   
    description: {
      type: String,
      required: true,
    },
    interaction_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
