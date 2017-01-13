"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const index_1 = require("./routes/index");
const mongoose = require("mongoose");
const acl = require("acl");
const session = require("express-session");
class Server {
    static bootstrap() {
        return new Server;
    }
    constructor() {
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }
    api() {
    }
    config() {
        var connection = mongoose.connect('mongodb://localhost:27017/app', function (error, db) {
            var mongoAcl = new acl.mongodbBackend(db, '_acl');
        });
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        this.app.use(session({
            name: 'session',
            secret: 'dfQOgm3KhGejWihd',
            resave: false,
            saveUninitialized: true,
            duration: 30 * 60 * 1000,
            activeDuration: 5 * 60 * 1000
        }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
    routes() {
        let router;
        router = express.Router();
        index_1.IndexRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
