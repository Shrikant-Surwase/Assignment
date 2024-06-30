import express from 'express'
import {getUser, userLogin, userRrgistration} from './userController';
//import app from '../app';

const userRouter = express.Router();

userRouter.post('/register', userRrgistration);
userRouter.post('/login', userLogin);
userRouter.get('/getUser', getUser);
export default userRouter;
