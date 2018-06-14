var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
require('./router/index')(app);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://localhost',);
});
