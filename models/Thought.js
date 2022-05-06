const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })
  

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
