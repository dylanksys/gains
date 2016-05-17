var express = require ('express');

var newRouter = require('../routers/newRouter');
var newRouter = require('../routers/newRouter');
var newRouter = require('../routers/newRouter');

var app = express();

app.use('/', newRouter);
app.use('/', newRouter);
app.use('/', newRouter);

app.listen(1337, function () {
	console.log('gains listening on port 1337');
};
