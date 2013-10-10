var http = require("http"),
    server = new http.Server(),
    url = require('url'),
    urlParsed;

server.listen(1337, "127.0.0.1");
server.on("request", function (req, res) {

    console.log(req.headers);


    urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname === "/echo" && urlParsed.query.message) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
    
});