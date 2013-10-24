
var http = require("http"),
    server = new http.Server(),
    fs = require("fs");


server.on("request", function (req, res) {

    if (req.url === "get.html") {

        fs.readFile('index.html', function (err, content) {

            if (err) {
                res.statusCode = 500;
                res.end("Server error");
            } else {
                res.setHeader("Content-Type", "text/html; charset=utf-8");
                res.end(content);
            }
        });
    }
});

server.listen(1337, "127.0.0.1");