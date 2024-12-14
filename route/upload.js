const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Multer disk storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the upload folder
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Set the file name
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extName = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Max 5 MB
  fileFilter: fileFilter,
});

// POST route for file upload
router.post("/", upload.single("file"), (req, res) => {
  try {
    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
