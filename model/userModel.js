const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name : {
		type : String ,
		required : [true,'name is required field'],
	},
	userName : {
		type : String,
		required : [true,'userName is required field'],
		unique : [true,'userName exist already']
	},
	password : {
		type : String,
		select : false,
		required : [true,'password is required field']
	}
});

userSchema.pre('save', async function(next) {
	this.password = await bcrypt.hash(this.password,10);
	next();
});

const User = mongoose.model('User',userSchema);

module.exports = User;