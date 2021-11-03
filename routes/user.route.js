const express = require('express');

const router = express.Router();

const userCtrl = require('../controller/userCtrl');

router.route('/')
	.get(userCtrl.getAllUsers)
	.post(userCtrl.createUser);
	
router.route('/:id')
	.patch(userCtrl.updateUser)
	.delete(userCtrl.deleteUser);

module.exports = router;