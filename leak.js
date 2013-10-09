var EventEmitter = require("events").EventEmitter,
    db = new EventEmitter();

function Request () {
    var self = this;

    this.bigData = new Array(1e6).join("*");
    this.send = function (data) {
        console.log(data);
    };

    this.onError = function () {
        self.send("we have a problem");
    };

    this.end = function () {
        db.removeListener("data", onData);
    };

    function onData(info) {
        self.send(info);
    };

    db.on("data", onData);
}

setInterval(function () {
    var request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed)
}, 200);