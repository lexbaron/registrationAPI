const express = require('express');
const registersRouters = express.Router();
const { getAllRegisters, createRegister, getRegisterById, updateRegister, deleteRegister } = require('../controllers/registers.controller')

registersRouters.get('/', getAllRegisters )

registersRouters.post('/',  createRegister )

registersRouters.get('/:id', getRegisterById )

registersRouters.patch('/:id', updateRegister)

registersRouters.delete('/:id', deleteRegister)

module.exports = { registersRouters }