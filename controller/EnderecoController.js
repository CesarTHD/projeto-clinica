const mongoose = require("mongoose");
const Endereco = require("../models/Endereco");


const addEndereco = async (req, res, next) => {

  try {
    const endereco = new Endereco({
		    rua: req.body.rua,
	    	bairro: req.body.bairro,
        cidade:req.body.cidade,
        cep:req.body.cep,
        numero:req.body.numero
	})
	await endereco.save()
	res.send(endereco)
  
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllEndereco = async (req , res, next)=>{

  const enderecos = await Endereco.find()
	res.send(enderecos)
}

const getEnderecoById = async (req,res,next)=>{
    try{
        const endereco = await Endereco.findOne({ _id: req.params.id })
        res.send(endereco)
    }catch{
        res.status(404)
		res.send({ error: "Endereco doesn't exist!" })

    }

}
const updateEndereco = async (req,res,next)=>{
    try {
		const endereco = await Endereco.findOne({ _id: req.params.id })

		if (req.body.rua) {
			endereco.rua = req.body.rua
		}

		if (req.body.bairro) {
			endereco.bairro = req.body.bairro
		}
    if (req.body.cidade) {
			endereco.cidade= req.body.cidade
		}
    if (req.body.cep) {
			endereco.cep = req.body.cep
		}
    if (req.body.numero) {
			endereco.numero = req.body.numero
		}

		await endereco.save()
		res.send(endereco)
	} catch {
		res.status(404)
		res.send({ error: "Endereco doesn't exist!" })
	}
}
const deleteEndereco = async (req,res,next)=>{
    try {
		await Endereco.deleteOne({ _id: req.params.id })
        res.json("RECORD DELETED SUCEFULLY")
	} catch {
		res.status(404)
		res.send({ error: "Endereco doesn't exist!" })
	}
}

module.exports = {
  addEndereco,
  getAllEndereco,
  getEnderecoById,
  updateEndereco,
  deleteEndereco
};