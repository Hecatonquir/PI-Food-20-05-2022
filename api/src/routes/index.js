const { Router } = require('express');

const router = Router();

const rout = require('./routes.js');

router.use(rout);
// esto significa que para todas las rutas, me voy a fijar en el archivo dentro "./routes.js"

module.exports = router;
