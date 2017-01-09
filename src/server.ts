import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";

export class Server {

    public app: express.Application;

    public constructor(){
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }

    public api() {

    }

    public config() {

    }

    public routes() {

    }

}

