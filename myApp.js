let express = require('express');
let app = express();
let bodyParser = require('body-parser');

require('dotenv').config();

// Custom middleware for logging request details.
// Morgan framework does that

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

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

app.get('/now', (req, res, next) => {
	req.time = new Date().toString();
	next();
}, (req, res) => {
	res.json({"time": `${req.time}`});
});

app.get('/:word/echo', (req, res) => {
	let word = req.params.word;
	res.json({"echo": `${word}`});
});

app.route('/name')
	.get((req, res) => {
		let name = req.query.first + " " + req.query.last;
		res.json({"name": `${name}`});
	})
	.post((req, res) => {
		let name = req.body.first + " " + req.body.last;
		res.json({"name": `${name}`});
	});





 module.exports = app;
