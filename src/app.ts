import { CommonRoutes } from './api/V2/routes/common.routes';
import * as bodyParser from 'body-parser';
import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import { UserRoutes } from './api/V2/routes/users.routes';

class App {
    public app : express.Application;
    /**
     * @mongoUrl needs to be a primitive one 
     * So remember to use string type instead of String wich is an object
     * As you can face tsc trouble when you compile
     */
    public mongoUrl : string | undefined = process.env.DATABASE_URL; 
    private userRoutes : UserRoutes = new UserRoutes ()
    private commonRoute : CommonRoutes = new CommonRoutes () 

    constructor () {
        this.app = express ();
        this.configApp ();
        this,this.setupDB ();
        this.userRoutes.route(this.app)
        this.commonRoute.route(this.app)
    }

    private configApp () : void {
        this.app.use(bodyParser.json()); // supports json docs post 
        this.app.use(bodyParser.urlencoded({ extended : false }));
        this.app.use(cors());
        this.app.use(helmet())
    }

    private setupDB () : void {
        if (this.mongoUrl) {
            mongoose.connect (this.mongoUrl, {
                useNewUrlParser : true,
                useUnifiedTopology : true,
                useCreateIndex : true,
                useFindAndModify : false
            })
        }
    }
    
}

export default new App ().app;