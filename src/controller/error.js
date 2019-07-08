exports.get404 = (req, res, next) => {	//handling when invalid page request comes
	res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
};