const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')
const dayjs = require('dayjs')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dayjs(createdAtVal).format('MMMM D, YYYY h:mm A')

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
      getters: true,
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
