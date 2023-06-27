const express = require('express');
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

// Ruta raíz
app.use('/libros', librosRouter);

// Middleware Error Handler
app.use(errorHandler);

// Iniciamos el servidor
app.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000');
});