var mongoose1 = require('mongoose');
var ApplicationForm = new mongoose1.Schema({
    question_name: String,
    question_actual_answer: String
});

mongoose1.model('application', ApplicationForm);

module.exports = mongoose1.model('application');