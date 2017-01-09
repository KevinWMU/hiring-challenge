"use strict";
var BaseRoute = (function () {
    function BaseRoute() {
        this.title = "Undefined Route Title";
    }
    BaseRoute.prototype.render = function (req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=route.js.map