var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/post-dnsmasq', function (req, res) {
  console.log('Body:', req.body);
  res.sendStatus(200);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

