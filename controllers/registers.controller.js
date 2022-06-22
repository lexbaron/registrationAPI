const { Registration } = require('../models/registration.model')

const getAllRegisters = async ( req, res ) => {
    try {

        const registers = await Registration.findAll() 

        res.status(200).json({
            status: "succes",
            registers
        })
        
    } catch (error) {
        console.log(error)
    }
}

const getRegisterById = async ( req, res ) =>{
    const { id } = req.params

    const register = await Registration.findOne( { where: { id } } )

    if(!register){
        return res.status(404).json({
            status: "error",
            message: "register not found"
        })
    }

    res.status(200).json({
        status: "success",
        register
    })
}

const createRegister = async ( req, res ) => {
    try {
        const { entranceTime } = req.body

        const newRegister = await Registration.create({
            entranceTime
        }
)
        res.status(201).json({
            status: "success",
            newRegister
        })

    } catch (error) {
        console.log(error)
    }
}

const updateRegister = async ( req, res ) =>{
    const { id } = req.params
    const { exitTime, status } = req.body

    const register = await Registration.findOne({where: { id }})

    if(!register){
        return res.status(404).json({
            status: "error",
            message: "register not found"
        })
    }

    await register.update({ exitTime, status })

    res.status(201).json({
        status: "succes",
        register
    })
}

const deleteRegister = async (req, res)  =>{
    const { id } = req.params

    const register = await Registration.findOne( { where: { id } } )

    if(!register){
        return res.status(404).json({
            status: "error",
            message: "register not found"
        })
    }

    await register.update({ status: "cancelled" })

    res.status(204).json({
        status: "success",
        register
    })
}

module.exports = { getAllRegisters, createRegister, getRegisterById, updateRegister, deleteRegister }