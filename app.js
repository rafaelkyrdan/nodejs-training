
var express = require('express'),
    http = require('http'),
    path = require('path'),
    config = require("./conf"),
    log = require("./libs/log")(module),
    app = express(),
    routes = require('./routes'),
    user = require('./routes/user');

// all environments
//app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger({ immediate: true, format: 'dev' }));
app.use(express.bodyParser());
app.use(express.methodOverride());

//app.use(express.cookieParser('your secret here'));
//app.use(express.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}

//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(config.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
  log.info('Express server listening on port ' + config.get('port'));
});

app.get('/', function (req, res) {
    res.render("index", {
        title: "Rafael",
        body: "<b>Hello</b>"
    })
});


//app.use(function (req, res, next) {
//
//    if (req.url === "/") {
//        res.send("the end");
//    } else if (req.url === "/forbidden") {
//        next(new Error("error happen"));
//    } else {
//        res.send(404, "not found");
//    }
//
//});
//
//app.use(function (err, req, res, next) {
//    if ('development' == app.get('env')) {
//        var errorHandler = express.errorHandler();
//        errorHandler(err, req, res, next);
//    } else {
//        res.send(500);
//    }
//});

