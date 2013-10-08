var util = require('util'),
    phrases = {},
    page;

phrases = {
    "Hello": "Hi",
    "world": "all"
};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(PhraseError, Error);
util.inherits(HttpError, Error);
PhraseError.prototype.name = "PhraseError";
HttpError.prototype.name = "HttpError";

function getPhrases(name) {
    if (!phrases[name]) {
        throw new PhraseError("can not find phrase");
    }
    return phrases[name];
}

function makePage(url) {
    if (url !== "index.html") {
        throw new HttpError(404, "http error");
    }
    return util.format("%s, %s", getPhrases("Hell"), getPhrases("world"));
}

try {
    page = makePage("index.html");
    console.log(page);
} catch (e){
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Error - %s,\n message - %s,\n stack - %s ", e.name, e.message, e.stack);
    }
}


