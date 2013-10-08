var util = require('util'),
    obj = {},
    str = "",
    rabbit;

obj = {
    a: 5,
    b: 6,
    inspect: function () {
        return 123;
    }
};

obj.self = obj;
console.log(util.inspect(obj));

str = util.format("My %s %d %j", "string", 123, {test: "obj"});
console.log(str);

function Animal() {
    this.name = name;
}

Animal.prototype.walk = function () {
  console.log("Walk" + this.name);
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
  console.log("Jump " + this.name);
};

rabbit = new Rabbit("our rabbit");
rabbit.walk();
rabbit.jump();

console.log("log");
console.error("error");