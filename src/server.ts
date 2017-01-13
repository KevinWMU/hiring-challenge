import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";

import  User from "./models/user";
import { IUser } from "./interfaces/user";
import { IndexRoute } from "./routes/index";

import mongoose = require("mongoose");
import acl = require("acl");
import session = require("express-session");


export class Server {

    public app: express.Application;

    public static bootstrap(): Server {
        return new Server;
    }

    public constructor(){
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }

    public api() {

    }

    public config() {

        var connection = mongoose.connect('mongodb://localhost:27017/app', function(error, db){
            var mongoAcl = new acl.mongodbBackend(db, '_acl');
        });
        
         
        //use q promises
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;


        this.app.use(session({
    name: 'session',
    secret: 'dfQOgm3KhGejWihd',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
}));
    

        //define public path for web server content
        this.app.use(express.static(path.join(__dirname, "public")));

        //define our views folder
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        
        //set up our logger
        this.app.use(logger("dev"));

        //enable bodyparser for json
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));



    }

    public routes() {

        let router: express.Router;
        router = express.Router();

        IndexRoute.create(router);

        this.app.use(router);
    }

}

