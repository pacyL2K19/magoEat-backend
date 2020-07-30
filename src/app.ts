import { UserController } from './controllers/users.controller';
import { CommonRoutes } from './routes/common.routes';
import * as bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import { UserRoutes } from './routes/users.routes';
// import {userRoute} from './routes/'

class App {
    public app : express.Application;
    /**
     * @mongoUrl needs to be a primitive one 
     * So remember to use string type instead of String wich is an object
     * As you can face tsc trouble when you compile
     */
    public mongoUrl : string | undefined = process.env.DATABASE_URL;
    private userRoutes : UserRoutes = new UserRoutes ();
    private commonRoute : CommonRoutes = new CommonRoutes ();
    // private userController : UserController = new UserController ();  

    constructor () {
        this.app = express ();
        this.configApp ();
        this,this.setupDB ();
        // this.app.use('/api/v2',route); // for all routes avoiding maany useless lines of code
        this.userRoutes.route(this.app);
        // this.commonRoute.route(this.app);
    }

    private configApp () : void {
        this.app.use(bodyParser.json()); // supports json docs post 
        this.app.use(bodyParser.urlencoded({ extended : false }));
        // this.app.get('/log', (req : Request, res : Response) => {
        //     res.status(200).json({
        //         message: "ok"
        //     })
        // })
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
                // .then(() => {
                //     console.log('Connected on mongodb')
                // })
                // .catch(() => {
                //     console.log('Failled to connect')
                // })
        }
    }
    
}

export default new App ().app;