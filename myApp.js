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

app.get('/', (req, res) => {
	res.sendFile('views/index.html');
});

































 module.exports = app;
