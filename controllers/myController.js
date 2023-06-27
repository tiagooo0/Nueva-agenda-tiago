const OneModel = require('../models/EventoModel');
const moment = require('moment');
const Evento = require("../models/EventoModel");


//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
  res.status(200).render('index', { eventos });
  
};
exports.inicio1 = async (req, res) => {
  try {
    // Consulta todos los eventos y los guarda en la variable eventos
    const eventos = await Evento.find();
    
    // Renderiza la vista 'index' con los datos proporcionados
    res.render('index', { eventos });
  } catch (error) {
    console.log("Error:"+ error);
    res.status(500).send('Error en el servidor');
  }

}

// Creacion de evento
exports.createEvento = (req, res) => {
  const nuevoEvento = new Evento({
    titulo: req.body.titulo,
    date: new Date(),
  });
    
    nuevoEvento.save((err, evento) => {
    if (err) {
        console.error("Error al crear el evento:");
        res.status(500).json({ error: "Error al crear el evento" });
    } else {
        res.redirect("/");
    }
    });
    
};

// Eliminar Evento
exports.deleteEvento = (req, res) => {
  const eventoId = req.params.id; // Cambiamos 'titulo' por 'id'

  Evento.findByIdAndRemove(eventoId, (err, evento) => { // Cambiamos 'findOneAndRemove' por 'findByIdAndRemove'
    if (err) {
      console.error("Error al eliminar el evento:", err);
      res.status(500).json({ error: "Error al eliminar el evento" });
    } else if (!evento) {
      res.status(404).json({ error: "El evento no existe" });
    } else {
      console.log("Se eliminó con éxito el evento");
      res.redirect("/");
    }
  });
};



  //update evento
  exports.updateEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findByIdAndUpdate(
    eventoId,
    req.body,
    { new: true },
    (err, evento) => {
        if (err) {
        console.error("Error al actualizar el evento:");
        res.status(500).json({ error: "Error al actualizar el evento" });
        } else {
            console.log('entro')
        res.redirect("/")
        }
    }
    );
};
