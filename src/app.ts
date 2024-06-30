import express from 'express'
import CreateHttpError from 'http-errors'
import cors from "cors"
import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './users/userRouters'

const app = express()
app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     next();
// });
app.use(express.json()) //to parsing the jsondata in req.body
app.get('/', (req, res, next) => {
    const error = CreateHttpError(500, "something went wrong")
    throw error;
    res.json({'message':'Hello guys'}) 
})

app.use('/', userRouter);


app.use(globalErrorHandler) //middlerwares




export default app;
