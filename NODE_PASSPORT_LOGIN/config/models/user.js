const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 name:{
  type: String,
  require:True
},
email:{
  type: String,
  require:True
},
password:{
  type: String,
  require:True
},
date:{
  type: date,
  default:date.now
},
});

const User = mongoose.model('User',UserSchema);

module.exports = User;