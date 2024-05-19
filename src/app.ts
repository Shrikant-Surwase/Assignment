import express from 'express'
import CreateHttpError from 'http-errors'

import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './users/userRouters'

const app = express()
app.use(express.json()) //to parsing the jsondata in req.body
app.get('/', (req, res, next) => {
    const error = CreateHttpError(500, "something went wrong")
    throw error;
    res.json({'message':'Hello guys'}) 
})

app.use('/api/users', userRouter);


app.use(globalErrorHandler) //middlerwares




export default app;