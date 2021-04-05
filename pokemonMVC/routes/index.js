const express = require('express');
const router = express.Router(); // Router serve para estruturar nossas rotas em arquivos diferentes

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
