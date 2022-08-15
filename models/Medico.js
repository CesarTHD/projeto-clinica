const mongoose = require("mongoose")

const schema = mongoose.Schema({
	crm: String,
	especialidade: Number,
})

module.exports = mongoose.model("Medico", schema)