var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    name: String, 
    description: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Question', QuestionSchema)
