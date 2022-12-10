const { Schema, model } = require('mongoose');

const gameUserInteractionSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    interaction_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }
);

const GameUserInteraction = model('GameUserInteraction', gameUserInteractionSchema);

module.exports = GameUserInteraction;
