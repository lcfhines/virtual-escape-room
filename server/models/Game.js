const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    game_id: {
      type: Number,
      required: true
    },
    story_line: {
      type: String,
      required: true,
    },
    time_limit: {
      type: Number,
      required: true,
    },
    rooms: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Room'
      }
    ]
  }
);

const Game = model('Game', gameSchema);

module.exports = Game;
