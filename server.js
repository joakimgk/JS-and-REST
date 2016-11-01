const express = require('express');  // import Express (JS) module

const app = express();

app.get('/', function(request, response) {
  response.send('Hello World');
});

const port = 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});
