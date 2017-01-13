import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

import { IUser } from "../interfaces/user";

import { IUserModel } from "../models/user";
//import User = require("../models/user");
//import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";

import mongoose = require("mongoose");

var User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);

export class UserRoute extends BaseRoute {

   // private static User: mongoose.Model<IUserModel>;
   

    public static create(router: Router){
        console.log("user route loaded");

      //this.User = mongoose.model<IUserModel>("User", UserSchema);

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().index(req, res, next);
        });

        router.get("/:userid", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().getUser(req, res, next);
        });

        router.put("/:userid", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().updateUser(req, res, next);
        });

        router.delete("/:userid", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().deleteUser(req, res, next);
        });

        router.get("/create", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().newUser(req, res, next);
        });

        router.post("/create", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().createUser(req, res, next);
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


    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Users";
        
        let options: Object = {
            "message" : "user route!"
        };

        this.render(req, res, "index", options);
    }

    public ivana(req: Request, res: Response, next: NextFunction) {
        this.title = "Users: Ivana";


      let user: IUser = {
        email: "Ivana@bar.com",
        firstName: "Ivana",
        lastName: "Garcia"
      };


      var ivana = new User(user);
      console.log(ivana);
      console.log("SAVING");
      ivana.save(function(err: any, saved: any) {
          if (err) console.log(err);
          else {
              console.log(saved);

        let options: Object = {
            "message" : "ivana user route!",
            "user" : ivana
        };

         this.render(req, res, "index", options);
          }
      });
        

    }

        public newUser(req: Request, res: Response, next: NextFunction) {
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

        public updateUser(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }

   public deleteUser(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }

    public createUser(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }
}