var phrases;

exports.connect = function () {
    phrases = require("./ru");
};

exports.getPhrases = function (name) {
    if (!phrases[name]) {
        throw new Error("I can not find - " + name);
    }

    return phrases[name];
};
