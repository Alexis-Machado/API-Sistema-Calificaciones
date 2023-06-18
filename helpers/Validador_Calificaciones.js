const ValidadorCalificaciones = (req) =>{
    const validators = [];

    if(!req.body.NumerodelRegistro){
        validators.push("Debe Ingresar un Número de Registro Unico");
    };

    if(!req.body.Nombre){
        validators.push("El Nombre del Estudiante es Requerido 🚀");
    };

    if(!req.body.Edad){
        validators.push("Debe Ingresar la Edad del Estudiante");
    };

    if(!req.body.Calificacion){
        validators.push("Debe Ingresar la Calificación del Estudiante");
    };

    if(!req.body.Estado){
        validators.push("Debe Ingregar el Estado Aprovado o Reprovado del Estudiante");
    };

    if(!req.body.Asignatura){
        validators.push("Debe Ingregar la Asignatura");
    };

    if(!req.body.FechaCalificacion){
        validators.push("Debe Ingregar la Fecha de la Calificación");
    };

    if(!req.body.Profesor){
        validators.push("Debe Ingregar el Profesor");
    };

    if(!req.body.NombreAcudiente){
        validators.push("Debe Ingregar el Nombre del Acudiente del Estudiante");
    };

    if(!req.body.NumeroContacto){
        validators.push("Debe Ingregar el Numero de Contacto del Acudiente del Estudiante");
    };

    if(!req.body.Email){
        validators.push("Debe Ingregar el Correo del Acudiente del Estudiante");
    };

    if(!req.body.PromedioGeneral){
        validators.push("Debe Ingregar el Promedio Total del Estudiante Actual");
    };

    if(!req.body.Comentarios){
        validators.push("Debe Ingregar un Comentario para el Estudiante");
    };


return validators;

};

module.exports={
    ValidadorCalificaciones,
}

