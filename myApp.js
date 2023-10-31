let express = require('express');
let app = express();


// Define a route for the root URL ("/")

function	handleRootReq(req, res) {
	res.send('Hello Express');
}

app.get('/', handleRootReq);

































 module.exports = app;
