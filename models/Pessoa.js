const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	idade: Number,
    cpf:String
})

module.exports = mongoose.model("Pessoa", schema)