
const PATH = require("path");
const EXPRESS = require('express');


exports.app = function (options) {

//    if (!options.redis.url) {
//        throw new Error("Missing secret config credentials! Load them into your environment first.");
//    }

    var app = EXPRESS();




    return function (req, res, next) {

        return app(req, res, function (err) {
            if (err) {
                console.error(err.stack || err);
                // TODO: Send simple error message to client.
                return next(err);
            }
            return next();
        });
    };
}
