let express = require('express');
let app = express();

require('dotenv').config();

// Define a route for the root URL ("/")

// app.get('/', (req, res) => {
// 	res.send('Hello Express');
// })


// Custom middleware for logging request details.
// Morgan framework does that

app.use((req, res, next) => {
	const { method, path, ip } = req;
	console.log(`${method} ${path} - ${ip}`);
	next();
})

app.get('/', (req, res) => {
	app.use('/public', express.static(__dirname + '/public'));
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
	if (process.env.MESSAGE_STYLE === "uppercase"){
		res.json({"message": "HELLO JSON"});
	}else {
		res.json({"message": "Hello json"});
	}
})





























 module.exports = app;
