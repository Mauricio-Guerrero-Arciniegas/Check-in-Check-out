const express = require('express');

// Controllers
const {
	getAllRegisters,
	createRegister,
	getRegisterById,
	patchRegister,
	deleteRegister,
} = require('../controllers/registers.controller');

// Middlewares
const {
	createRegisterValidators,
} = require('../middlewares/validators.middleware');

const registersRouter = express.Router();

registersRouter.get('/', getAllRegisters);

registersRouter.get('/:id', getRegisterById);

registersRouter.post('/', createRegisterValidators, createRegister);

registersRouter.patch('/:id', patchRegister); // next()

registersRouter.delete('/:id', deleteRegister);

module.exports = { registersRouter };