"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const index_1 = require("./routes/index");
const mongoose = require("mongoose");
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
        mongoose.connect('mongodb://localhost:27017/app');
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        console.log("DIRECTORY");
        console.log(__dirname);
    }
    routes() {
        let router;
        router = express.Router();
        index_1.IndexRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
