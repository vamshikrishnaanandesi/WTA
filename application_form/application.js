var mongoose1 = require('mongoose');
var ApplicationForm = new mongoose1.Schema({
    question_name: String,
    question_actual_answer: String,
    question_user_answered: String
});

mongoose1.model('application', ApplicationForm);

module.exports = mongoose1.model('application');

var submittedApplicationForm = new mongoose1.Schema({
    user_details: { type: mongoose1.Schema.Types.ObjectId, ref: 'application'}

});

mongoose1.model('submit', submittedApplicationForm);

module.exports = mongoose1.model('submit');