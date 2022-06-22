// Models
const { Register } = require('../models/registers.model');

const getAllRegisters = async (req, res) => {
	try {
		const Registers = await Register.findAll();

		res.status(200).json({
			status: 'success',
			Registers,
		});
	} catch (err) {
		console.log(err);
	}
};

const createRegister = async (req, res) => {
	try {
		const { entranceTime, exitTime } = req.body;
		const newRegister = await Register.create({
			entranceTime,
			exitTime,
		});

		res.status(201).json({
			status: 'success',
			newRegister,
		});
	} catch (err) {
		res.status(400).json({
			message: 'Something went wrong',
			err,
		});
	}
};

const getRegisterById = async (req, res) => {
	const { id } = req.params;

	const register = await Register.findOne({ where: { id } });

	if (!register) {
		return res.status(404).json({
			status: 'error',
			message: 'Register not found',
		});
	}

	res.status(200).json({
		status: 'success',
		register,
	});
};

const patchRegister = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { exitTime, status } = req.body;

		const register = await Register.findOne({ where: { id } });

		// if (!Register) {
		// 	return res.status(404).json({
		// 		status: 'error',
		// 		message: 'Register not found',
		// 	});
		// }

		await register.update({ exitTime, status });

		res.status(204).json({ status: 'success' });
	} catch (error) {
		next(error);
	}
};

const deleteRegister = async (req, res) => {
	const { id } = req.params;

	const register = await Register.findOne({ where: { id } });

	if (!register) {
		return res.status(404).json({
			status: 'error',
			message: 'Register not found',
		});
	}

	// await Register.destroy();
	await register.update({ status: 'cancelled' });

	res.status(204).json({ status: 'success' });
};

module.exports = {
	getAllRegisters,
	createRegister,
	getRegisterById,
	patchRegister,
	deleteRegister,
};