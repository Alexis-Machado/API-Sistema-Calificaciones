const { Router } = require('express');
const Calificaciones = require('../models/Calificaciones');
const { ValidadorCalificaciones } = require('../helpers/Validador_Calificaciones');


const router = Router();

router.post('/', async function (req, res) {
  try {

    const validators = ValidadorCalificaciones(req);
    if (validators.length > 0) {
      return res.status(400).send(validators);
    }
    console.log('Objeto Recibido ✅', req.body);

    let calificaciones = new Calificaciones();

    // Verificar si la calificación está fuera del rango válido (mayor a 5.0)
    if (req.body.Calificacion > 5.0) {
      return res.status(400).send('La Calificación está fuera del rango Valido tiene que ser <= a 5.0 🚨');
    }

    const NumerodelRegistroExist = await Calificaciones.findOne({ NumerodelRegistro: req.body.NumerodelRegistro });

    if (NumerodelRegistroExist) {
      return res.status(400).send("Ya existe un Sistema de Calificación asociado a ese Número de Registro 🚨");
    };

    calificaciones.NumerodelRegistro = req.body.NumerodelRegistro;
    calificaciones.Nombre = req.body.Nombre;
    calificaciones.Edad = req.body.Edad;
    calificaciones.Calificacion = req.body.Calificacion;
    calificaciones.Estado = req.body.Estado;
    calificaciones.Asignatura = req.body.Asignatura;
    calificaciones.FechaCalificacion = req.body.FechaCalificacion;
    calificaciones.Profesor = req.body.Profesor;
    calificaciones.NombreAcudiente = req.body.NombreAcudiente;
    calificaciones.NumeroContacto = req.body.NumeroContacto;
    calificaciones.Email = req.body.Email;
    calificaciones.PromedioGeneral = req.body.PromedioGeneral;
    calificaciones.Comentarios = req.body.Comentarios;
    calificaciones.Fecha_Creacion = new Date();
    calificaciones.Fecha_Actualizacion = new Date();

    calificaciones = await calificaciones.save();
    res.send(calificaciones);

  } catch (error) {
    res.status(500).send('Ocurrió un Error 🚨');
    console.log(error);
  }
});


// GET /calificaciones
router.get('/', async function (req, res) {
  try {
    const calificaciones = await Calificaciones.find();
    res.send(calificaciones);
  } catch (error) {
    res.status(500).send('Ocurrió un Error 🚨');
    console.log(error);
  }
});

// PUT /calificaciones/:id
router.put('/:id', async function (req, res) {
  try {
    const validators = ValidadorCalificaciones(req);
    if (validators.length > 0) {
      return res.status(400).send(validators);
    }

    const calificacionId = req.params.id;
    const updatedCalificacion = req.body;

    const calificacion = await Calificaciones.findByIdAndUpdate(calificacionId, updatedCalificacion, { new: true });

    if (!calificacion) {
      return res.status(404).send('El Sistema de Calificación del Estudiante no fue encontrado 🚨');
    }

    res.send(calificacion);
  } catch (error) {
    res.status(500).send('Ocurrió un Error 🚨');
    console.log(error);
  }
});

// DELETE /calificaciones/:id
router.delete('/:id', async function (req, res) {
  try {
    const calificacionId = req.params.id;

    const calificacion = await Calificaciones.findByIdAndDelete(calificacionId);

    if (!calificacion) {
      return res.status(404).send('El Sistema de Calificación del Estudiante no fue encontrado 🚨');
    }

    const nombre = calificacion.Nombre; // Obtener el nombre del usuario eliminado

    res.send(`El Sistema de la Calificación del Estudiante "${nombre}" fue Eliminada Exitosamente ✅`);
  } catch (error) {
    res.status(500).send('Ocurrió un Error 🚨');
    console.log(error);
  }
});

module.exports = router;
