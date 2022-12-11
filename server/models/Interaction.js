const { Schema, model } = require('mongoose');
// const reactionSchema = require ('./Reaction')

const interactionSchema = new Schema(
  {
    interaction_id: {
      type: String,
      required: true,
    },
    display_if_visited_interaction_id: {  
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: true,
    },
    object_id: {
      type: String,
      required: true,
    },
    reaction: {
      type: String,
      default: ''
    },
    motives: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Motive'
      }
    ]
  }
);

const Interaction = model('Interaction', interactionSchema);

module.exports = Interaction;
