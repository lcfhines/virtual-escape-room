const { Schema, model } = require('mongoose');

const solutionSchema = new Schema(
  {
    character_id: {
      type: String,
      required: true,
    },
    object_id: {
      type: String,
      required: true,
    },
    motive_id: {
      type: String,
      required: true,
    },
  }
);

const Solution = model('Solution', solutionSchema);

module.exports = Solution;
