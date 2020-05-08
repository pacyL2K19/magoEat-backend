import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Logger from '../utils/Logger';
dotenv.config();

export const db : mongoose.Connection = mongoose.createConnection(process.env.DATABASE_URL,
    { 
        // connection options
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
db.on('connecting', () => {
    Logger.info('Connecting to MongoDb');
})

db.on('connected', () => {
    Logger.info('Connected');
})

db.on('error', () => {
    Logger.error('Failed to connect');
    mongoose.disconnect();
})