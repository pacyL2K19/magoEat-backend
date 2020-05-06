import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv';

const app = express ();
dotenv.config();

app.use(cors());
app.use (bodyParser.json());

export default app;