var express = require("express");
var router = express.Router();
var multer = require("multer");


const librosController = require("../controllers/librosController");


const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'uploads')
  },
  filename: (req, file, callBack) => {
    callBack(null, `public/images${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

router.get("/", librosController.index);
// router.post("/", cargar.single("archivo"), librosController.guardar); // 'archivo' es el nombre del form

router.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;

  console.log(file.filename);
  console.log(req.file);
  
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);

});

router.post('/multipleFiles', upload.array('files'), (req, res, next) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send({ sttus: 'ok' });
});

module.exports = router;
