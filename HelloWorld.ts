//initial tinkering with typescript.
//OBSOLETE

import * as express from 'express';

class Startup {
    public static main(): number {
        console.log('hello world!');
        return 0;
    }

public static start(): void {
    var app = express();

var PORT = process.env.port || 80;

app.get('/', function(req, res){
    res.send("suhdude");
})

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});
}
}

Startup.start();

