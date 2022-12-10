const { Schema, model } = require('mongoose');

const solutionSchema = new Schema(
  {
    character_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    object_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    motive_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }
);

const Solution = model('Solution', solutionSchema);

module.exports = Solution;
