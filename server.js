const express = require('express');  // import Express (JS) module
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  console.log("Noen aksesserer /");
  response.send('Hello World');
});

// endpoint /tvShow served by tvShowRouter
app.use('/tvShow', tvShowRouter);

const port = 3000;
app.listen(port, function() {
  //console.log('TEST: port ' + port);
  console.log(`Example app listening on port ${port}`);
});