const express = require("express");
const {
  addEndereco,
  getAllEndereco,
  getEnderecoById,
  updateEndereco,
  deleteEndereco
} = require("../controller/EnderecoController");

const router = express.Router();

router.post("/addEndereco", addEndereco);
router.get("/getallEndereco",getAllEndereco)
router.get("/getEnderecoById/:id",getEnderecoById)
router.post("/updateEndereco/:id",updateEndereco)
router.delete("/deleteEndereco/:id",deleteEndereco)

module.exports = {
  routes: router,
};
