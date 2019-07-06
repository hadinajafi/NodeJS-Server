const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{	//handling when invalid page request comes
	res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
console.log("Server running at port 3000");