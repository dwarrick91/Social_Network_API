const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')
// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,

    },
    username: {
        type: String,
        required: true,
        
      },
    
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
