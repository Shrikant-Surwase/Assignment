import { NextFunction, Request, RequestHandler, Response } from "express";


const userRrgistration = async (req:Request, res:Response, next:NextFunction) => {
    res.json({message:'user registered'})
}
export {userRrgistration}