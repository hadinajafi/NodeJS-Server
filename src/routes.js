const file = require('fs');

const requestHandler = (req, res) => {
	if (req.url === '/test') {
		//console.log("test page loaded!", req.url);
		res.setHeader('Content-Type', 'text/html');
		res.write('<html><body><form action="/message" method="POST"><input type="text" name="msgField"><button type="submitted">Send</button></form></body></html>');
		return res.end();
	}
	if (req.url === '/message' && req.method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
			console.log(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			file.writeFile('message.txt', parsedBody.split('=')[1], err => {

				console.log('No errors happened!');
			});
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();

	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html><body>This is my first page</body></html>');
	res.end();
	//console.log(req.headers, req.url);
};

module.exports = requestHandler;
