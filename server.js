var User = require("./user"),
    db = require("./db"),
    log = require("logger")(module);

db.connect();

function run() {

    log(db.getPhrases("Run"));

    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);

}


if (module.parent) {
    exports.run = run;
} else {
    run();
}