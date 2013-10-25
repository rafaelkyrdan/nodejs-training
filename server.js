var http = require("http"),
    opts = require("optimist").argv;

console.log(opts);

http.createServer(function (req, res) {
    res.end("The server is running!")
}).listen(opts.port);