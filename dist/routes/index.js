"use strict";
const route_1 = require("./route");
const user_1 = require("./user");
const express = require("express");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("routes loaded");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
        let userRouter;
        userRouter = express.Router();
        user_1.UserRoute.create(userRouter);
        router.use('/user', userRouter);
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home";
        let options = {
            "message": "index route!"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
