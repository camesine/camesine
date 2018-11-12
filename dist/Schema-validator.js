"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OPTS = {
    abortEarly: false,
    language: {
        key: "{{key}} ",
    },
};
function validator(schema) {
    return function (req, res, next) {
        var params = req.method === "GET" ? req.params : req.body;
        var error = schema.validate(params, OPTS).error;
        if (error) {
            var message = error.message;
            return res.status(400).json({ message: message });
        }
        else {
            return next();
        }
    };
}
exports.validator = validator;
