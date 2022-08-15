const mongoose = require("mongoose");
const Pessoa = require("../models/Pessoa");


const addPessoa = async (req, res, next) => {

  try {
    const pessoa= new Pessoa({
		    name: req.body.name,
	    	idade: req.body.idade,
            cpf:req.body.cpf
	})
	await pessoa.save()
	res.send(pessoa)
  
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPessoas = async (req , res, next)=>{

  const pessoas = await Pessoa.find()
	res.send(pessoas)
}

const getPessoaById = async (req,res,next)=>{
    try{
        const pessoa = await Pessoa.findOne({ _id: req.params.id })
        res.send(pessoa)
    }catch{
        res.status(404)
		res.send({ error: "pessoa doesn't exist!" })

    }

}
const updatePessoa = async (req,res,next)=>{
    try {
		const pessoa = await Pessoa.findOne({ _id: req.params.id })

		if (req.body.name) {
			pessoa.name = req.body.name
		}

		if (req.body.idade) {
			pessoa.idade = req.body.idade
		}
        if(req.body.cpf){
            pessoa.cpf = req.body.cpf
        }

		await pessoa.save()
		res.send(pessoa)
	} catch {
		res.status(404)
		res.send({ error: "Pessoa  doesn't exist!" })
	}
}
const deletePessoa = async (req,res,next)=>{
    try {
		await Pessoa.deleteOne({ _id: req.params.id })
        res.json("RECORD DELETED SUCEFULLY")
	} catch {
		res.status(404)
		res.send({ error: "Pessoa doesn't exist!" })
	}
}

module.exports = {
    addPessoa,
    getAllPessoas,
    getPessoaById,
  updatePessoa,
  deletePessoa
};