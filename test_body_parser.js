var http = require("https");

var options = {
  "method": "GET",
  "hostname": "c16db448-d912-4ce8-823a-db6c51e09878.mock.pstmn.io"
};

var req = http.request(options, function (res) {
  var chunks = '';

  res.on("data", function (chunk) {
    console.log(chunk.length)
    chunks += chunk;
  });

  res.on("end", function () {
    const object = JSON.parse(chunks)
    console.log(object.length)
    console.log(Buffer.byteLength(chunks, 'utf8') / 1024 + " kbytes");
  });
});