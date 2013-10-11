var http = require("http"),
    server = new http.Server(),
    url = require('url'),
    log = require("./log")(module),
    fs = require("fs");


server.on("request", function (req, res) {
    var info;

    if (req.url === "/") {
        fs.readFile("index.html", function (err, info) {
            if (err) {
                res.statusCode = 500;
                res.end("Server error");
                return;
            }
            res.end(info);
        });
    } else if (req.url === "/now") {
        res.end(new Date().toString());
    }
});

server.listen(1337, "127.0.0.1");