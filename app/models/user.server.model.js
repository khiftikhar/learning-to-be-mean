var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define a schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});
mongoose.model('User', UserSchema);
console.log('Model "User" is defined');