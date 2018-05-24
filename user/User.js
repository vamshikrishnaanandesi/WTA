var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  user_name: String,
  user_mail: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');