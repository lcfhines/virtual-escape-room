const { Schema, model } = require('mongoose');
const {reactionSchema} = require ('./Reaction')

const interactionSchema = new Schema(
  {
    display_if_visited_interaction_id: {  
      type: Schema.Types.ObjectId,
    },
    description: {
      type: String,
      required: true,
    },
    object_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    reaction: {
      type: reactionSchema
    }
  }
);

const Interaction = model('Interaction', interactionSchema);

module.exports = Interaction;
