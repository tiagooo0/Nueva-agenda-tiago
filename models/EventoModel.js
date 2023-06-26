//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema evento
const eventoSchema = new mongoose.Schema({
    titulo: String,
    date: { type: Date, default: Date.now },
  });
//Creación del modelo Post
const Evento = mongoose.model("Evento", eventoSchema);

module.exports = Evento;

