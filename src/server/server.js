// Importamos Express para manejar el servidor web
import express from 'express';

// Importamos el módulo HTTP de Node.js
import http from 'http';


// Importamos el módulo "path" de Node.js para manejar rutas de archivos y directorios
import path from 'path';

/**
 * Función que inicia el servidor
 * @param {Object} options - Configuración del servidor
 * @param {number} options.port - Puerto en el que correrá el servidor
 * @param {string} [options.public_path='public'] - Carpeta de archivos estáticos (por defecto 'public')
 */
export const startServer = (options) => {
    // Desestructuramos los valores de "options"
    const { port, public_path = 'public' } = options;

    // Creamos una instancia de Express
    const app = express();

    // ------------------------------
    // CONFIGURACIÓN DE MIDDLEWARES
    // ------------------------------
    // Servimos archivos estáticos desde la carpeta definida en "public_path"
    app.use(express.static(public_path));
    // Esto permite acceder a archivos HTML, CSS, imágenes, etc.

    // ------------------------------
    // CONFIGURACIÓN DE RUTAS
    // ------------------------------
    // Manejamos cualquier ruta no específica ('*') y servimos el archivo index.html
    app.get('*', (req, res) => {
        // Construimos la ruta al archivo index.html dentro de "public_path"
        const index_path = path.join(__dirname, `../../../${public_path}/index.html`);
        
        // Enviamos el archivo HTML como respuesta
        res.sendFile(index_path);
    });

    // ------------------------------
    // INICIAR SERVIDOR
    // ------------------------------
    // Habilitamos el servidor para escuchar en el puerto especificado
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto: ${port}`);
    });
};

