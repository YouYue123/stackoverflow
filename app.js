var http = require('http');
var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 

var productPage = fs.readFileSync('nodewebappform.html');

var server = http.createServer(function (req, resp) {

    if (req.method === "POST") {
        var productData = '';
        //6.
        req.on('data', function (prd) {
            productData += prd;
        }).on('end', function () {
            //console.log('The received data is ' + productData.toString());
            console.log('name ' + productData.body.name);
            //resp.end('Data received  from you is ' + productData.toString());
            resp.end(productData);

        var IDStr = productData.toString().id;
            var nameStr = productData.toString().name;
            var accTypeStr = productData.toString().accountype;
            var accNoStr = productData.toString().description;
            var Address = productData.toString().address;

            var data = JSON.stringify({     
                      "records": [
                        [
                          {
                            "value": {
                              "ID": IDStr ,
                              "Name": nameStr,
                              "AccountNo": accNoStr,
                              "Address": Address,
                              "AccountType": accTypeStr
                            }
                          }
                        ]
                      ]
            });

            var options = {
                    url: 'http://localhost:8082/topics/topictest',
                    method: 'POST',
                    body : data,
                    headers: {
                        'Content-Type': 'application/vnd.kafka.json.v2+json; charset=utf-8',
                            'Accept': 'application/vnd.kafka.v2+json; charset=utf-8'
                    },   
                };

            req(options, function(error, response, body){
                    if(error) console.log(error);
                    else {                          
                            console.log(JSON.stringify(response));
                    }
                });


        });          
    }
});
server.listen(6900);
console.log('Server started on  6900');