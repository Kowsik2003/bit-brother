module.exports = (err,req,res,next) => {

	if(!err.statusCode)
	{
		return res.json({err});
	}

	res.status(err.statusCode).json({
		status : 'fail',
		message : err.messages
	})
}