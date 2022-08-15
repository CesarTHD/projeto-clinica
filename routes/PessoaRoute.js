const express = require("express");
const {
  addPessoa,
  getAllPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa
} = require("../controller/PessoaController");

const router = express.Router();

router.post("/addPessoa", addPessoa);
router.get("/getAllPessoas",getAllPessoas)
router.get("/getPessoaById/:id",getPessoaById)
router.post("/updatePessoa/:id",updatePessoa)
router.delete("/deletePessoa/:id",deletePessoa)

module.exports = {
  routes: router,
};
