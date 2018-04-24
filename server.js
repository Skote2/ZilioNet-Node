#!/usr/bin/env nodejs
const express = require('express');
const pug = require('pug');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
	//console.log(req.path);
	var html = pug.renderFile('./pug/' + 'index.pug');
	res.send(html);
});

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});

app.use(express.static('files'));
