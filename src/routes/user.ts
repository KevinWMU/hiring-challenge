import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

import { IUser } from "../interfaces/user";

import User from "../models/user";
//import User = require("../models/user");
//import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";

import mongoose = require("mongoose");

//var User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);

export class UserRoute extends BaseRoute {

   // private static User: mongoose.Model<IUserModel>;
   

    public static create(router: Router){
        console.log("user route loaded");

      //this.User = mongoose.model<IUserModel>("User", UserSchema);

        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().index(req, res, next);
        });


        router.get("/create", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().newUser(req, res, next);
        });

        router.post("/create", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().createUser(req, res, next);
        });


        router.get("/login", (req: Request, res: Response, next: NextFunction) => {
             new UserRoute().login(req, res, next);
        });

        router.post("/login", (req: Request, res: Response, next: NextFunction) => {
             new UserRoute().checkLogin(req, res, next);
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

        //router.use(someMiddleware)
        //router.get('/specialRoutes')
        //router.get('/evenMoreSpecialroute')
    }

    constructor() {
        super();
    }


    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Users";

        var users;
        User.find().exec((err, results) => {
            if (err) throw err;
            else 
            users = results;
        });
        
        let options: Object = {
            "message" : "user route!",
            "data": users
        };

        this.render(req, res, "index", options);
    }

/*public ivana(req: Request, res: Response, next: NextFunction) {
        this.title = "Users: Ivana";


      let user: IUser = {
        email: "Ivana@bar.com",
        firstName: "Ivana",
        lastName: "Garcia"
      };


      var promise = new User(user).save();
      promise.then(function (doc) {
      console.log(doc);
      res.send("done");
    });
    }
    */


    

        public newUser(req: Request, res: Response, next: NextFunction) {
        this.title = "CreateUser";
        
        let options: Object = {
            "message" : "creating user!"
        };

        this.render(req, res, "newUser", options);
    }

    public getUser(req: Request, res: Response, next: NextFunction) {
        //some search(req.params/)
        //
        //res.send(someJSON);
    }


    public login(req: Request, res: Response, next: NextFunction) {
        /*if (req.session){
            delete req.session;
        }
        */
        res.render("login");
    }
        public checkLogin(req: Request, res: Response, next: NextFunction) {
        /*if (req.session){
            delete req.session;
        }
        */
        let options: Object = {};
        
        res.render("index",options);
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
      let newUser: IUser = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstname,
        lastName: req.body.lastname
      };
        res.send(req.body);
        //some search(req.params/)
        //
        //res.send(someJSON);
    }
}