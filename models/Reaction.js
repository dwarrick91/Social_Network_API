const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dayjs(createdAtVal).format('MMMM D, YYYY h:mm A')
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;