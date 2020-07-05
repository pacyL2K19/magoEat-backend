import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors'
import * as helmet from 'helmet'

class App {
    public app : express.Application;
    /**
     * @mongoUrl needs to be a primitive one 
     * So remember to use string type instead of String wich is an object
     * As you can face tsc trouble when you compile
     */
    public mongoUrl : string = process.env.DATABASE_URL; 

    constructor () {
        this.app = express ();
        this.configApp ();
        this,this.setupDB ();
    }

    private configApp () : void {
        this.app.use(bodyParser.json()); // supports json docs post 
        this.app.use(bodyParser.urlencoded({ extended : false }));
        this.app.use(cors());
        this.app.use(helmet())
    }

    private setupDB () : void {
        mongoose.connect (this.mongoUrl, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true,
            useFindAndModify : false
        })
    }
}

export default new App ().app;