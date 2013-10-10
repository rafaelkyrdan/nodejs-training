var http = require("http"),
    server = new http.Server(),
    url = require('url'),
    log = require("./log")(module);


server.on("request", function (req, res) {

    var urlParsed = url.parse(req.url, true);
    log.info("info");

    if (req.method === "GET" && urlParsed.pathname === "/echo" && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        log.debug("debug");
        return;
    }

    log.error("error");

    res.statusCode = 404;
    res.end("Page not found");

});

server.listen(1337, "127.0.0.1");