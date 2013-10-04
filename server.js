var User = require("./user"),
    db = require("./db"),
    logger;

db.connect();

function run() {

    console.log(db.getPhrases("Run"));

    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);

}


if (module.parent) {
    exports.run = run;
} else {
    run();
}