"use strict";
var express = require("express");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
    };
    Server.prototype.routes = function () {
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map