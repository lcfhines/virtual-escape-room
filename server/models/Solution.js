const { Schema, model } = require('mongoose');

const solutionSchema = new Schema(
  {
    suspect_id: {
      type: String,
      required: true,
    },
    weapon_id: {
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
