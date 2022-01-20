var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(
      `<h1 style='text-align: center'>
            Wellcome to apiREST: IMAGE UPLOADER
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
    );
});

module.exports = router;
