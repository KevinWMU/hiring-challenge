import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";

import { IndexRoute } from "./routes/index";

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

        console.log("DIRECTORY");
        console.log(__dirname);
    }

    public routes() {

        let router: express.Router;
        router = express.Router();

        IndexRoute.create(router);

        this.app.use(router);
    }

}

