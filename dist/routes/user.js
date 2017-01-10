"use strict";
const route_1 = require("./route");
class UserRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("user route loaded");
        router.get("/", (req, res, next) => {
            new UserRoute().index(req, res, next);
        });
        router.get("/ivana", (req, res, next) => {
            new UserRoute().ivana(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Users";
        let options = {
            "message": "user route!"
        };
        this.render(req, res, "index", options);
    }
    ivana(req, res, next) {
        this.title = "Users: Ivana";
        let options = {
            "message": "ivana user route!"
        };
        this.render(req, res, "index", options);
    }
}
exports.UserRoute = UserRoute;
