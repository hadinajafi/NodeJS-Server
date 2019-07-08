const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));	//where to find views: ./views folder

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) =>{	//handling when invalid page request comes
	res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
});

app.listen(3000);
console.log("Server running at port 3000");