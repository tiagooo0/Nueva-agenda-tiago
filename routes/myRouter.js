const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();
const Evento = require("../models/EventoModel");


//Defino rutas y acciones de respuesta

router.get('/', myController.inicio1)
router.post("/evento", myController.createEvento);
router.post('/eventos', myController.createEvento);

router.delete("/delEvento/:titulo", myController.deleteEvento);
router.post("/evento/:titulo/edit", myController.updateEvento);
module.exports = router;
  