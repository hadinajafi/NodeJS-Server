const http = require('http');

const routes = require('./routes');

http.createServer(routes).listen(3000);
console.log("server running at port 3000");