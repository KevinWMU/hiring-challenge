import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

export class IndexRoute extends BaseRoute {
    public static create(router: Router){
        console.log("created index route");
    }

    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Home";
        
        let options: Object = {
            "message" : "index route!"
        };

        this.render(req, res, "index", options);
    }
}