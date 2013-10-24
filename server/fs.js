var fs = require('fs');

var stream = new fs.ReadStream("index.html");

stream.on('readable', function () {
    var data = stream.read();
    console.log(data.toString());
});

stream.on('end', function () {
   console.log("The end");
});