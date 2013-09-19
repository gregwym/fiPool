var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var voteSchema = new Schema({
  choice: String,
  user: Number,
  date: { type: Date, default: Date.now },
  comment: String
});

var poolSchema = new Schema({
  question: String,
  detail: String,
  source: String,
  author: String,
  votes: [voteSchema],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: { type: Number, default: 0 },
    favs: { type: Number, default: 0 }
  }
});

module.exports = exports = mongoose.model('Pool', poolSchema);
