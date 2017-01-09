"use strict";
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server;
    };
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
        //define public path for web server content
        this.app.use(express.static(path.join(__dirname, "public")));
        //define our views folder
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        //set up our logger
        this.app.use(logger("dev"));
        //enable bodyparser for json
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    };
    Server.prototype.routes = function () {
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map