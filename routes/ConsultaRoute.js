const express = require("express");
const {
    addConsulta,
    getAllConsulta,
    getConsultaById,
    updateConsulta,
    deleteConsulta
} = require("../controller/ConsultaController");

const router = express.Router();

router.post("/addConsulta", addConsulta);
router.get("/getAllConsulta",getAllConsulta)
router.get("/getConsultaById/:id",getConsultaById)
router.post("/updateConsulta/:id",updateConsulta)
router.delete("/deleteConsulta/:id",deleteConsulta)

module.exports = {
  routes: router,
};
