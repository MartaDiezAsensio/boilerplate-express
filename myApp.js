let express = require('express');
let app = express();


// Define a route for the root URL ("/")

// function	handleRootReq(req, res) {
// 	res.send('Hello Express');
// }
// app.get('/', handleRootReq);


// app.get('/', (req, res) => {
// 	res.send('Hello Express');
// })

//absolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

































 module.exports = app;
