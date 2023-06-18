const {Schema, model} = require('mongoose');

const CalificacionesSchema = Schema({

    NumerodelRegistro:{
        type: Number,
        required: true,
        unique: true
    },

    Nombre:{
        type: String,
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Nombre"
    },

    Edad:{
        type: Number,
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Edad"
    },

    Calificacion:{
        type: Number,
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Calificacion"
    },

    Estado:{
        type: String,
        required: true,
        enum:[
            'APROVADO',
            'REPROVADO',
            'EN REFUERZO'
        ]
    },

    Asignatura:{
        type: String, 
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Asignatura"
    },

    FechaCalificacion:{
        type: String, 
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "FechaCalificacion"
    },
    
    Profesor:{
        type: String, 
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Profesor"
    },

    NombreAcudiente:{
        type: String, 
        required: true
    },

    NumeroContacto:{
        type: String, 
        required: true 
    },

    Email:{ 
        type: String, 
        required: true 
    },

    PromedioGeneral:{ 
        type: Number, 
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "PromedioGeneral"  
    },

    Comentarios:{
        type: String, 
        required: true,
        unique: false  // Remueve la restricción de unicidad en el campo "Comentarios"  
    },

    Fecha_Creacion:{
        type: Date,
        required: true
    },

    Fecha_Actualizacion:{
        type: Date,
        required: true
    }

});

module.exports =model('Calificaciones', CalificacionesSchema);