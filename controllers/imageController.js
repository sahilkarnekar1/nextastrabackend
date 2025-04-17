const Image = require('../models/Image');


exports.uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    const userId = req.user.id;
    if (!image) return res.status(400).json({ message: 'Image is required.' });

    const newImage = new Image({ image, user: userId });
    await newImage.save();

    res.status(201).json("Image uploaded successfully.");
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

exports.getUserImages = async (req, res) => {
  try {
    const userId = req.user.id;

    const images = await Image.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const userId = req.user.id;

    const image = await Image.findOne({ _id: imageId, user: userId });
    if (!image) return res.status(404).json({ message: 'Image not found or not authorized.' });

    await Image.deleteOne({ _id: imageId });

    res.status(200).json({ message: 'Image deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};
