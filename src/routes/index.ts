import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { UserRoute } from "./user";
import { PostRoute } from "./post";

import * as express from "express";

export class IndexRoute extends BaseRoute {
    public static create(router: Router){
        console.log("routes loaded");

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });

        let userRouter: express.Router;
        userRouter = express.Router();
        UserRoute.create(userRouter);

        router.use('/user', userRouter);

        let postRouter: express.Router;
        postRouter = express.Router();
        PostRoute.create(postRouter);

        router.use('/post', postRouter);

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