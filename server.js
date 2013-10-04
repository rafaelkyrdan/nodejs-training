var app = require("./user");

var vasya = new app.User("Vasya");
var petya = new app.User("Petya");

vasya.hello(petya);