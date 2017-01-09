"use strict";
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("index route loaded");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
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
