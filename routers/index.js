const express = require('express');
const router = express.Router();

const { index } = require('../controllers/indexController');


//ruta
router.get('/', index);

module.exports = router;