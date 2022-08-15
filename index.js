const express = require("express")
const mongoose = require("mongoose");
const ClienteRoute = require("./routes/ClienteRoute");
const ConsultaRoute = require("./routes/ConsultaRoute");

const EnderecoRoute = require("./routes/EnderecoRoute");
const MedicoRoute = require("./routes/MedicoRoute");
const PessoaRoute = require("./routes/PessoaRoute");


mongoose
	.connect("mongodb+srv://ruanvg:ESCOLA01@cluster0.rnxg0ym.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) // new
        app.use("/api/v1", EnderecoRoute.routes);
        app.use("/api/v1", ClienteRoute.routes);
        app.use("/api/v1", ConsultaRoute.routes);
        app.use("/api/v1", MedicoRoute.routes);
        app.use("/api/v1", PessoaRoute.routes);

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
