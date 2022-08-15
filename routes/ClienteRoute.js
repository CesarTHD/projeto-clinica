const express = require("express");
const {
    addCliente,
    getAllCliente,
    getCLienteById,
    updateCliente,
    deleteCliente
} = require("../controller/ClienteController");

const router = express.Router();

router.post("/addCliente", addCliente);
router.get("/getAllCliente",getAllCliente)
router.get("/getCLienteById/:id",getCLienteById)
router.post("/updateCliente/:id",updateCliente)
router.delete("/deleteCliente/:id",deleteCliente)

module.exports = {
  routes: router,
};
