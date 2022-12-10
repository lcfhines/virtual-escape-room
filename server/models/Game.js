const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    story_line: {
      type: String,
      required: true,
    },
    time_limit: {
      type: Number,
      required: true,
    },
  }
);

const Game = model('Game', gameSchema);

module.exports = Game;
