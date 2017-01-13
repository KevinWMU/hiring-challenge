"use strict";
const route_1 = require("./route");
const user_1 = require("../models/user");
class UserRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("user route loaded");
        router.get("/", (req, res, next) => {
            new UserRoute().index(req, res, next);
        });
        router.get("/create", (req, res, next) => {
            new UserRoute().newUser(req, res, next);
        });
        router.post("/create", (req, res, next) => {
            new UserRoute().createUser(req, res, next);
        });
        router.get("/login", (req, res, next) => {
            new UserRoute().login(req, res, next);
        });
        router.get("/:userid", (req, res, next) => {
            new UserRoute().getUser(req, res, next);
        });
        router.put("/:userid", (req, res, next) => {
            new UserRoute().updateUser(req, res, next);
        });
        router.delete("/:userid", (req, res, next) => {
            new UserRoute().deleteUser(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Users";
        var users;
        user_1.default.find().exec((err, results) => {
            if (err)
                throw err;
            else {
                users = results;
                let options = {
                    "message": "user route!",
                    "data": users
                };
                this.render(req, res, "index", options);
            }
        });
    }
    newUser(req, res, next) {
        this.title = "CreateUser";
        let options = {
            "message": "creating user!"
        };
        this.render(req, res, "newUser", options);
    }
    getUser(req, res, next) {
        user_1.default.findById(req.params.userid, (err, doc) => {
            if (err)
                throw err;
            else
                res.send(doc);
        });
    }
    login(req, res, next) {
        res.render("login");
    }
    updateUser(req, res, next) {
        var userInfo = {
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.fname,
            lastName: req.body.lname,
            email: req.body.email
        };
        user_1.default.findByIdAndUpdate(req.params.userid, userInfo).exec();
    }
    deleteUser(req, res, next) {
        user_1.default.findByIdAndRemove(req.params.userid);
    }
    createUser(req, res, next) {
        let newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.fname,
            lastName: req.body.lname
        };
        user_1.default.create(newUser, (err, doc) => {
            if (err)
                throw err;
            else
                res.send(doc);
        });
    }
}
exports.UserRoute = UserRoute;
