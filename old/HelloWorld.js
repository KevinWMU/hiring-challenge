"use strict";
var express = require("express");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('hello world!');
        return 0;
    };
    Startup.start = function () {
        var app = express();
        var PORT = process.env.port || 80;
        app.get('/', function (req, res) {
            res.send("suhdude");
        });
        app.listen(PORT, function () {
            console.log("Listening on port " + PORT);
        });
    };
    return Startup;
}());
Startup.start();
//# sourceMappingURL=HelloWorld.js.map