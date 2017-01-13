import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

import { IUser } from "../interfaces/user";

import { IUserModel } from "../models/user";
//import User = require("../models/user");
//import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";

import mongoose = require("mongoose");

var User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);

export class PostRoute extends BaseRoute {

   // private static User: mongoose.Model<IUserModel>;
   

    public static create(router: Router){
        console.log("post route loaded");

      //this.User = mongoose.model<IUserModel>("User", UserSchema);

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().index(req, res, next);
        });

        router.get("/:postid", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().getPost(req, res, next);
        });

        router.put("/:postid", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().updatePost(req, res, next);
        });

        router.delete("/:postid", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().deletePost(req, res, next);
        });

        router.get("/create", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().newPost(req, res, next);
        });

        router.post("/create", (req: Request, res: Response, next: NextFunction) => {
            new PostRoute().createPost(req, res, next);
        });


        //router.use(someMiddleware)
        //router.get('/specialRoutes')
        //router.get('/evenMoreSpecialroute')
    }

    constructor() {
        super();
    }


    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Posts";
        
        let options: Object = {
            "message" : "post route!"
        };

        this.render(req, res, "index", options);
    }

        public newPost(req: Request, res: Response, next: NextFunction) {
        this.title = "Post new thread";
        
        let options: Object = {
            "message" : "creating post!"
        };

        this.render(req, res, "index", options);
    }

    public getPost(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }

        public updatePost(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }

   public deletePost(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }

    public createPost(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }
}