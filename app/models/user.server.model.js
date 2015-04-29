var mongoose = require('mongoose'), Schema = mongoose.Schema;

//Define a schema
var UserSchema = new Schema({
  userName: String,
  password: String,
  email: String,
  name : String
});

//Define the model
mongoose.model('User', UserSchema);
console.log('Model "User" is defined');