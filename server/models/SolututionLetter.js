const { Schema, model } = require('mongoose');

const solutionLetterSchema = new Schema(
  {
    success: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    game_id: {
        type: Number,
        required: true,
    }
  }
);

const SolutionLetter = model('SolutionLetter', solutionLetterSchema);

module.exports = SolutionLetter
