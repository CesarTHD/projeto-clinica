const mongoose = require("mongoose");
const Cliente = require("../models/Cliente");


const addCliente = async (req, res, next) => {

  try {
    const cliente = new Cliente({
		    senha: req.body.senha,
	    	email: req.body.email,
             dataNascimento:req.body.cidade,
	})
	await cliente.save()
	res.send(cliente)
  
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllCliente = async (req , res, next)=>{

  const clientes = await Cliente.find()
	res.send(clientes)
}

const getCLienteById = async (req,res,next)=>{
    try{
        const cliente = await Cliente.findOne({ _id: req.params.id })
        res.send(cliente)
    }catch{
        res.status(404)
		res.send({ error: "CLiente doesn't exist!" })

    }

}
const updateCliente = async (req,res,next)=>{
    try {
		const cliente = await Cliente.findOne({ _id: req.params.id })

		if (req.body.senha) {
			cliente.senha = req.body.senha
		}

		if (req.body.email) {
			cliente.email = req.body.email
		}
    if (req.body.dataNascimento) {
			cliente.dataNascimento= req.body.dataNascimento
		}

		await cliente.save()
		res.send(cliente)
	} catch {
		res.status(404)
		res.send({ error: "CLiente  doesn't exist!" })
	}
}
const deleteCliente = async (req,res,next)=>{
    try {
		await Cliente.deleteOne({ _id: req.params.id })
        res.json("RECORD DELETED SUCEFULLY")
	} catch {
		res.status(404)
		res.send({ error: "CLiente doesn't exist!" })
	}
}

module.exports = {
    addCliente,
  getAllCliente,
  getCLienteById,
  updateCliente,
  deleteCliente
};