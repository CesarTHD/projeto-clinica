const mongoose = require("mongoose")

const schema = mongoose.Schema({
	rua: String,
	bairro: String,
	cidade: String,
	cep: String,
	numero: Number ,
})

module.exports = mongoose.model("Endereco", schema)