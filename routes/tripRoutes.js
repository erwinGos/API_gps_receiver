const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.get('/createNewPoint', tripController.createNewPoint);
router.get('/getall', tripController.getAll);

module.exports = router;