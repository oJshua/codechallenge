
var feed = require('feed-read');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  feed('https://news.ycombinator.com/rss', function(error, articles) {
    if (error) {
      return res.status(500).send(error);
    }

    res.send(articles);
  });
});

var server = app.listen(process.env.VMC_APP_PORT || 1337, function() {
  console.log('Listening on port %d', server.address().port);
});
