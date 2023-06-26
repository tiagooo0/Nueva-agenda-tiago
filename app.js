const express = require('express');
const methodOverride = require("method-override");
const path = require('path');
const morgan = require('morgan');
const app = express();
const myRouter = require('./routes/myRouter');
const Evento = require("./models/EventoModel.js")

// Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');

// Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev')); // Middleware para el registro de solicitudes HTTP
app.use(express.json()); // Middleware para obtener datos de las solicitudes con BodyParser
app.use(express.static(path.join(__dirname, 'public'))); // Configurando archivos estáticos
app.use(methodOverride("_method"));//Middleware para solicitudes POST se conviertan en otros métodos HTTP

// Agrego un enrutador compatible
app.use('/', myRouter);

module.exports = app;


   //  Consulta todos los eventos y los imprime en la consola
Evento.find()
.then((eventos) => {
    console.log("Eventos encontrados:", eventos);
})
.catch((error) => {
    console.log("Error al consultar eventos:", error);
});

// Insertar un evento en la base de datos



//   Eliminar un evento de la base de datos
/*(async () => {
    try {
        const deletedEvento = await Evento.deleteOne({ titulo: "prueba evento" });
        console.log('Evento eliminado:', deletedEvento);
    } catch (err) {
        console.log(err);
    }
});
*/
