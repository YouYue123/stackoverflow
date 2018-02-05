var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    const family = [{
      "_id": {
          "$oid": "5a6a906492b7b30014b18111"
      },
      "date": {
          "$date": "2018-01-26T02:20:20.428Z"
      },
      "surName": "x",
      "members": [
          {
              "firstName": "x"
          },
          {
              "firstName": "y"
          },
          {
              "firstName": "z"
          }
      ]
  }]

    res.render('home', {
      family
    });
});

app.listen(3000);
