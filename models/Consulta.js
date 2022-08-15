const mongoose = require("mongoose")

const schema = mongoose.Schema({
	dataConsulta: String,
	status: String,
    tipoServico:String,
    valorTotal: Number,
})

module.exports = mongoose.model("Consulta", schema)