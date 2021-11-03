const User = require('../model/userModel');
const AppError = require('../utils/AppError');

exports.createUser = async (req,res,next) => {
	try {
		const newUser = await User.create(req.body);

	    newUser.password = null;

		res.status(201).json({
			status : 'success',
			data : {
				newUser
			}
		});
	} catch(err) {
		return next(err);
	}
}

exports.getAllUsers = async (req,res,next) => {
	const users = await User.find().catch(err => {return next(err)});

	res.status(200).json({
		status : 'success',
		data : {
			no_of_user : users.length,
			users
		}
	});
}

exports.updateUser = async (req,res,next) => {
	const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{
		new : true,
		runValidators : true
	}).catch(err => {return next(err)});

	res.status(200).json({
		status : 'success',
		data : {
			updatedUser
		}
	})
}

exports.deleteUser = async (req,res,next) => {
	const deleteUser = await User.findByIdAndDelete(req.params.id).catch(err => {return next(err)});

	res.status(200).json({
		status : 'success',
		data : null
	})
}