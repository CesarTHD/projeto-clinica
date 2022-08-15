const mongoose = require("mongoose");
const Consulta = require("../models/Consulta");


const addConsulta = async (req, res, next) => {

  try {
    const consulta = new Consulta({
		    dataConsulta: req.body.dataConsulta,
	    	status: req.body.status,
            tipoServico:req.body.tipoServico,
	})
	await consulta.save()
	res.send(consulta)
  
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllConsulta = async (req , res, next)=>{

  const consultas = await Consulta.find()
	res.send(consultas)
}

const getConsultaById = async (req,res,next)=>{
    try{
        const consulta = await Consulta.findOne({ _id: req.params.id })
        res.send(consulta)
    }catch{
        res.status(404)
		res.send({ error: "Consulta doesn't exist!" })

    }

}
const updateConsulta = async (req,res,next)=>{
    try {
		const consulta = await Consulta.findOne({ _id: req.params.id })

		if (req.body.dataConsulta) {
			consulta.dataConsulta = req.body.dataConsulta
		}

		if (req.body.status) {
			consulta.status = req.body.status
		}
    if (req.body.tipoServico) {
			consulta.tipoServico= req.body.tipoServico
		}
        if (req.body.valorTotal) {
			consulta.valorTotal= req.body.valorTotal
		}


		await consulta.save()
		res.send(consulta)
	} catch {
		res.status(404)
		res.send({ error: "COnsulta  doesn't exist!" })
	}
}
const deleteConsulta = async (req,res,next)=>{
    try {
		await Consulta.deleteOne({ _id: req.params.id })
        res.json("RECORD DELETED SUCEFULLY")
	} catch {
		res.status(404)
		res.send({ error: "consulta doesn't exist!" })
	}
}

module.exports = {
    addConsulta,
    getAllConsulta,
    getConsultaById,
    updateConsulta,
  deleteConsulta
};