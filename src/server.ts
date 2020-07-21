import express, { Application, Request, Response, NextFunction } from 'express'
import * as cors from 'cors'


const app : Application = express ()
const PORT : number = 3000

app.get('/', (req : Request, res : Response, next : NextFunction) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))