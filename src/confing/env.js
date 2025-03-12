// Cargamos las variables de entorno definidas en el archivo .env usando dotenv
require('dotenv').config();

// Importamos la función "get" del paquete "env-var" para manejar las variables de entorno de forma segura
const { get } = require('env-var');

// Definimos un objeto "envs" que contendrá las variables de entorno con validaciones
const envs = {
    // Definimos la variable PORT obteniéndola desde el archivo .env
    PORT: get('PORT')
        .required() // Indica que esta variable es obligatoria
        .asPortNumber(), // Convierte su valor en un número de puerto válido

    // Definimos la variable PUBLIC_PATH obteniéndola desde el archivo .env
    PUBLIC_PATH: get('PUBLIC_PATH')
        .default('public') // Si no está definida en .env, toma "public" como valor por defecto
        .asString(), // Convierte su valor en una cadena de texto
};

// Exportamos el objeto "envs" para que pueda ser utilizado en otros archivos del proyecto
module.exports = {
    envs
};
