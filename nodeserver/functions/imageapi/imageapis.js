const express = require('express'),
    multer = require('multer');
const router = express.Router();

// File upload settings  
const PATH = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

let upload = multer({
    storage: storage
});


// POST File
router.post('/upload', upload.single('image'), function (req, res) {
    if (!req.file) {
        console.log("No file is available!");
        return res.send({
            success: false
        });

    } else {
        console.log('File is available!');
        return res.send({
            success: true
        })
    }
});

module.exports = router;
