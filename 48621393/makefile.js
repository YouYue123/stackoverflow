const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
var sudo = require('sudo');
var options = {
    cachePassword: true,
    prompt: 'Password, yo? '
};

app.use(bodyParser.json())

app.post('/', (req, res) => {
  var fs = require('fs');
  var dir = req.body.dir;
  console.log(dir)
  var child = sudo([ 'mkdir', '-p', dir ], options);
  console.log(child.spawnargs)
  // var child = sudo([ 'ls', '-l'], options)
  child.stdout.on('data', function (data) {
      console.log(data.toString());
      res.send(data.toString())
  });
})

https.request(optionspost, function(res) {
        res.on('data', function(d) {
            Console.log('Cloud Resp:', d);
            var jsonObj = JSON.parse(d);
        });

app.listen(3000, () => console.log('Example app listening on port 3000!'))

