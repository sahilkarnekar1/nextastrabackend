const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const auth = require('../middleware/authMiddleware'); 


router.post('/', auth, imageController.uploadImage);     
router.get('/', auth, imageController.getUserImages);   
router.delete('/:id', auth, imageController.deleteImage); 

module.exports = router;
