import express from 'express'
import {userRrgistration} from './userController';
//import app from '../app';

const userRouter = express.Router();

userRouter.post('/register', userRrgistration)
userRouter.post('/login')
export default userRouter;
