var express = require('express');
var app = express();

app.set('port', process.env.PORT || 9000);
app.use(express.static('public'));

app.get('/comments.json', function(req, res) {
  res.send(
    [
      { "id": "1", "author": "Pete Hunt", "text": "This is one comment" },
      { "id": "2", "author": "Jordan Walke", "text": "This is *another* comment" }
    ]
  );
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
