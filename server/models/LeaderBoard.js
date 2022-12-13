const { Schema, model } = require('mongoose');

const leaderBoardSchema = new Schema(
  {
    game_id: {
      type: Number,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
     number_of_attempts: {
      type: Number,
      default: 0
    },
    final_solution_time: {
      type: Number,
      default: 0
    },
  }
);

const LeaderBoard = model('LeaderBoard', leaderBoardSchema);

module.exports = LeaderBoard;
