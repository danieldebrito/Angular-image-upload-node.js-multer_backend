var express = require("express");
var router = express.Router();
var multer = require("multer");

////**********mys controllers */
const librosController = require("../controllers/librosController");

/////*** multer config ///////////////////////////////////// */
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/images')
  },
  filename: (req, file, callBack) => {
    callBack(null, `img${file.originalname}`)
  }
})
const upload = multer({ storage: storage })
///// ////////////////////////////////////////////////////////

router.get("/", librosController.index);
router.post("/file", upload.single('file'), librosController.add);



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
