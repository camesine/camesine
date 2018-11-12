"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var Router = /** @class */ (function () {
    function Router(controller) {
        this.controller = controller;
        this.router = express.Router();
    }
    Router.prototype.handler = function (action) {
        var _this = this;
        return function (req, res) { return action.call(new _this.controller(req, res)); };
    };
    return Router;
}());
exports.Router = Router;
