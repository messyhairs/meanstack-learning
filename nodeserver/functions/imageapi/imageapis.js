const express = require('express');
  const path = require('path');
  const cors = require('cors');
  const multer = require('multer');
  const bodyParser = require('body-parser');
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

router.get('/api', function (req, res) {
  res.end('File catcher');
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

// Create PORT
// const PORT = process.env.PORT || 8000;
// const server = app.listen(PORT, () => {
//   console.log('Connected to port ' + PORT)
// })

// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });
