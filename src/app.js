// Importamos las variables de entorno definidas en envs.js
const { envs } = require('./confing/env');

// Importamos la función que inicia el servidor
const { startServer } = require('./server/server');

// ------------------------------
// FUNCIÓN MAIN 
// ------------------------------
// Definimos la función "main", que será la encargada de iniciar el servidor
const main = () => {
    startServer({
        port: envs.PORT, // Usamos el puerto definido en las variables de entorno
        public_path: envs.PUBLIC_PATH, // Definimos la ruta pública del servidor
    });
};

// ------------------------------
// FUNCIÓN AUTOEJECUTADA (IIFE)
// ------------------------------
// Utilizamos una función autoejecutable asincrónica para ejecutar "main" de inmediato
(async () => {
    main();
})();

/*
Explicación sobre la función autoejecutable:
- Es una función anónima porque no tiene nombre.
- Se ejecuta automáticamente gracias a los paréntesis finales `()`.
- Se declara como una función asincrónica `async` para permitir el uso de await en el futuro si es necesario.
*/
