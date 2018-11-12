"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OPTS = {
    abortEarly: false,
    language: {
        key: "{{key}} ",
    },
};
function schemaValidator(schema) {
    return function (req, res, next) {
        var params = req.method === "POST" ? req.body : req.params;
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
exports.schemaValidator = schemaValidator;
