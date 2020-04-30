const express = require('express');
const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.post('/post-dnsmasq', function (req, res) {
  console.log('Body:', req.body);
  res.sendStatus(200);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

