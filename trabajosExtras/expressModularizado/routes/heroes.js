const express = require('express'); //requerimos express
const router = express.Router();

const heroesController = require("../controllers/heroesController"); //ubicacion del controlador de heroes

router.get('/', heroesController.listar);
router.get('/detalle/:idHeroe', heroesController.detalles);
router.get('/bio/:idHeroe/:ok?', heroesController.bio);

module.exports = router