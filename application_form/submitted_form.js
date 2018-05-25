var mongoose1 = require('mongoose');

var submittedApplicationForm = new mongoose1.Schema({
    user_details: { type: mongoose1.Schema.Types.ObjectId, ref: 'application'}

});

mongoose1.model('submit', submittedApplicationForm);

module.exports = mongoose1.model('submit');