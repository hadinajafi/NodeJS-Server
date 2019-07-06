const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{	//handling when invalid page request comes
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);
console.log("Server running at port 3000");