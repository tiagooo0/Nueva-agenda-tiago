

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

