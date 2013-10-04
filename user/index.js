var db = require("../db");


function User(name) {
    this.name = name;
}

console.log(db);

User.prototype.hello = function (who) {
    console.log(db.getPhrases("Hello") + ", " + who.name);
};

module.exports = User;

