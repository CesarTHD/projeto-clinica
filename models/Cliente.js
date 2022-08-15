const mongoose = require("mongoose")

const schema = mongoose.Schema({
	senha: String,
	email: String,
    dataNascimento:String
})

module.exports = mongoose.model("Cliente", schema)