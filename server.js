var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 9000);
app.use(express.static('public'));

var data = [
  { "id": "1", "author": "Pete Hunt", "text": "This is one comment" },
  { "id": "2", "author": "Jordan Walke", "text": "This is *another* comment" }
];

app.get('/comments.json', function(req, res) {
  res.send(data);
});

app.post('/comments.json', function(req, res) {
  newComment = req.body;
  console.log('√', newComment);
  data.push(newComment);

  res.send(data);
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
