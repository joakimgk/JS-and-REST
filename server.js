const express = require('express');  // import Express (JS) module
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', function(request, response) {
  console.log("Noen aksesserer /");
  response.send('Hello World');
});

const port = 3000;
app.listen(port, function() {
  //console.log('TEST: port ' + port);
  console.log(`Example app listening on port ${port}`);
});
