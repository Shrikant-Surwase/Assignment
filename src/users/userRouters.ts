import express from 'express'
import {userLogin, userRrgistration} from './userController';
//import app from '../app';

const userRouter = express.Router();

userRouter.post('/register', userRrgistration);
userRouter.post('/login', userLogin);
export default userRouter;
