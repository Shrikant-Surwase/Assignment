import { NextFunction, Request, RequestHandler, Response } from "express";
import CreateHttpError from 'http-errors'

const userRrgistration = async (req:Request, res:Response, next:NextFunction) => {
    //validation
    const { name, email, password } = req.body; //destructured the data
    if (!name || !email || !password) {
        const error = CreateHttpError(400, "All fields are required");
        return next(error);
    }
    
}
export {userRrgistration}