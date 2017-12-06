var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    name: String,
    description: String
});

CommentSchema.pre('remove', function (next) {
    this.model('Question').update({}, { $pull: { comments: this._id } }, { safe: true, multi: true }, next);
})

mongoose.model('Comment', CommentSchema)