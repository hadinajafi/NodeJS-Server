const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded());

router.get('/add-product', (req, res, next) =>{
	res.send('<form action="/admin/add-product" method="POST"><input name="title" type="text"><button type="submitted">Add product</button></form>');
});

router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;