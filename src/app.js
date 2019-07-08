const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controller/error');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));	//where to find views: ./views folder

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
console.log("Server running at port 3000");