const express = require("express");
const {
    addMedico,
    getAllMedicos,
  getMedicoById,
  updateMedico,
  deleteMedico
} = require("../controller/MedicoController");

const router = express.Router();

router.post("/addMedico", addMedico);
router.get("/getAllMedicos",getAllMedicos)
router.get("/getMedicoById/:id",getMedicoById)
router.post("/updateMedico/:id",updateMedico)
router.delete("/deleteMedico/:id",deleteMedico)

module.exports = {
  routes: router,
};
