import express, { NextFunction, Request, Response } from 'express'
import CreateHttpError ,{HttpError} from 'http-errors'
import { config } from '../config/config'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app = express()

app.get('/', (req, res, next) => {
    const error = CreateHttpError(500, "something went wrong")
    throw error;
    res.json({'message':'Hello guys'})
})

app.use(globalErrorHandler)




export default app;