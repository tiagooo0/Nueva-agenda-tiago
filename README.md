# expressBase
Estructura de trabajo personal con ExpressJs y MongoDB

el form
<form action="/eventos" method="POST">
                    <label for="asunto">Titulo:</label>
                    <input type="text" name="asunto" required>
                    
                    <label for="descript">Descripción:</label>
                    <textarea name="descript" required></textarea>
                    
                    <label for="prioridad">Prioridad:</label>
                    <select name="prioridad" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                    <label for="fecha_hora">Fecha y Hora:</label>
                    <input type="datetime-local" name="fecha_hora" required>
                    <button class="btn6" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" >Cancelar</button>
                    <button type="submit" class="btn2">Crear</button>
                </form>

las rutas

const express = require("express");
const router = express.Router();
const myController = require("../controllers/myController");

router.get("/eventos", myController.getEventos);

router.post("/evento", myController.createEvento);

router.get("/evento/:id", myController.getEventoById);

router.post("/evento/:id/editar", myController.updateEvento);





module.exports = router;

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
        res.redirect("/eventos")
        }
    }
    );
};

