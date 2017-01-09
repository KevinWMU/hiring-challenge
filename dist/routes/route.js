"use strict";
class BaseRoute {
    constructor() {
        this.title = "Undefined Route Titlez";
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.render(view, options);
    }
}
exports.BaseRoute = BaseRoute;
