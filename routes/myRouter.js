const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();
const Evento = require("../models/EventoModel");


//Defino rutas y acciones de respuesta
router.get('/', async (req, res) => {
    try {
      // Consulta todos los eventos y los guarda en la variable eventos
      const eventos = await Evento.find();
      
      // Renderiza la vista 'index' con los datos proporcionados
      res.render('index', { eventos });
    } catch (error) {
      console.log("Error:"+ error);
      res.status(500).send('Error en el servidor');
    }
  });
  
router.post("/evento", myController.createEvento);
router.post('/eventos', myController.createEvento);

router.delete("/delEvento/:titulo", myController.deleteEvento);
router.post("/evento/:titulo/edit", myController.updateEvento);
module.exports = router;
  