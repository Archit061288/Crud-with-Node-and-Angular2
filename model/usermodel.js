var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mytest');
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('connection error', err);
});

db.once('open', function () {
	console.log('connected.');
});

var Schema = mongoose.Schema;

// User Table
var userSchema = new Schema({
	title : String,
	isdone : Boolean
});
var User = mongoose.model('User', userSchema);


module.exports = {
	User:User
}