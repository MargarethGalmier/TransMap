const controller = require('../controller/instituiçãoController');
const express = require('express');

const router = express.Router();

router.get("/all", controller.findAllInstituições);

router.post("/add", controller.addNewInstituição);

router.patch("/:id", controller.updateInstituição);

router.delete("/:id", controller.deleteInstituição);

module.exports = router