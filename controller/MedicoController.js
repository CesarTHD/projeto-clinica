const mongoose = require("mongoose");
const Medico = require("../models/Medico");


const addMedico = async (req, res, next) => {

  try {
    const medico= new Medico({
		    crm: req.body.crm,
	    	especialidade: req.body.especialidade,
	})
	await medico.save()
	res.send(medico)
  
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllMedicos = async (req , res, next)=>{

  const medicos = await Medico.find()
	res.send(medicos)
}

const getMedicoById = async (req,res,next)=>{
    try{
        const medico = await Medico.findOne({ _id: req.params.id })
        res.send(medico)
    }catch{
        res.status(404)
		res.send({ error: "medico doesn't exist!" })

    }

}
const updateMedico = async (req,res,next)=>{
    try {
		const medico = await Medico.findOne({ _id: req.params.id })

		if (req.body.crm) {
			medico.crm = req.body.crm
		}

		if (req.body.especialidade) {
			medico.especialidade = req.body.especialidade
		}

		await medico.save()
		res.send(medico)
	} catch {
		res.status(404)
		res.send({ error: "medico  doesn't exist!" })
	}
}
const deleteMedico = async (req,res,next)=>{
    try {
		await Medico.deleteOne({ _id: req.params.id })
        res.json("RECORD DELETED SUCEFULLY")
	} catch {
		res.status(404)
		res.send({ error: "Medico doesn't exist!" })
	}
}

module.exports = {
    addMedico,
    getAllMedicos,
    getMedicoById,
    updateMedico,
    deleteMedico
};