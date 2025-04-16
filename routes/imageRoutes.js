const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const auth = require('../middleware/authMiddleware'); // your JWT middleware

// Protect all routes with auth
router.post('/', auth, imageController.uploadImage);      // POST image
router.get('/', auth, imageController.getUserImages);     // GET all images by user
router.delete('/:id', auth, imageController.deleteImage); // DELETE by image ID

module.exports = router;
