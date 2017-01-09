"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_1 = require("./route");
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        return _super.call(this) || this;
    }
    IndexRoute.create = function (router) {
        console.log("created index route");
    };
    IndexRoute.prototype.index = function (req, res, next) {
        this.title = "Home";
        var options = {
            "message": "index route!"
        };
        this.render(req, res, "index", options);
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map