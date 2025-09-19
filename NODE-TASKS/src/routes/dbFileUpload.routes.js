const dbFileUploadController = require("../controllers/dbFileUploadController.controller");
const express = require('express');
const router = express.Router();
const { upload } = require("../utils/multer");

router.post('/', upload.single("file"), dbFileUploadController.uploadFIle);


module.exports = router;