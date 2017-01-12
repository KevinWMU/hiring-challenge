import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

import { IUser } from "../interfaces/user";
import { IUserModel } from "../models/user";
import { UserSchema } from "../schemas/user";

export class UserRoute extends BaseRoute {
    public static create(router: Router){
        console.log("user route loaded");

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().index(req, res, next);
        });

        router.get("/ivana", (req: Request, res: Response, next: NextFunction) => {
             new UserRoute().ivana(req, res, next);
        });

        //router.use(someMiddleware)
        //router.get('/specialRoutes')
        //router.get('/evenMoreSpecialroute')
    }

    constructor() {
        super();
    }

public add(a: number, b: number): number;
public add(a: string, b: string): number;
public add(a: any, b: any): number {
    if (typeof a == "string") {

    }
    if (typeof a == "number") {

    }
    return a + b;
}


    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Users";
        
        let options: Object = {
            "message" : "user route!"
        };

        this.render(req, res, "index", options);
    }

    public ivana(req: Request, res: Response, next: NextFunction) {
        this.title = "Users: Ivana";
        
        let options: Object = {
            "message" : "ivana user route!"
        };

        this.render(req, res, "index", options);
    }

        public createUser(req: Request, res: Response, next: NextFunction) {
        this.title = "CreateUser";
        
        let options: Object = {
            "message" : "creating user!"
        };

        this.render(req, res, "index", options);
    }

    public getUser(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }
}