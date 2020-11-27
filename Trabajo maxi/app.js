const express = require('express'); // Require de Express
const fs = require('fs');// Require de FS
const app = express();// Ejecución de Express

app.listen(3030, () => console.log('Server running in 3030 port')); // Levantando el Servidor en el puerto 3030



const mainRouter = require('./routes/main');
const heroesRouter = require('./routes/heroes');


app.use('/', mainRouter);
app.use('/heroes', heroesRouter);
app.use('/heroes/detalle/:idHeroe', heroesRouter);
app.use('/bio/:idHeroe/:ok?', heroesRouter);
app.use('/creditos', mainRouter);


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});