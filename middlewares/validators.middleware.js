const { body, validationResult } = require('express-validator');

const checkResult = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		// Array has errors
		const errorMsgs = errors.array().map(err => err.msg);

		const message = errorMsgs.join('. ');

		return res.status(400).json({ status: 'error', message });
	}

	next();
};

const createRegisterValidators = [
	body('entranceTime').notEmpty().withMessage('Name cannot be empty'),
	//body('exitTime').isISO8601().toDate().withMessage('Date cannot be empty'),
	//body('status').notEmpty().withMessage('satus cannot be empty'),
	checkResult,
];

module.exports = { createRegisterValidators };