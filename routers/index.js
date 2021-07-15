const express = require('express');
const router = express.Router();

const { index, about } = require('../controllers/indexController');



//ruta
router.get('/', index);
router.get('/about', about);

module.exports = router;