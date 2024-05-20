import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { User } from "./userType";
import { sign } from "jsonwebtoken";
import { config } from "../../config/config";
const userRrgistration = async (req: Request,res: Response,next: NextFunction) => {
    //validation
    const { name, email, password } = req.body; //destructured the data
    //1) checking is any quantity is typed or not
    if (!name || !email || !password) {
        const error = createHttpError(400, "All fields are required");
        return next(error);
    }
    //2) checking is email is valid or not
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return next(createHttpError(400, "User Alrady exists!!"));
        }
    } catch (error) {
        return next(createHttpError(400, "Something went wrong!!"));
    }
    //hashing password by using bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser: User;
    // 
    try {
        newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });
    } catch (error) {
        return next(createHttpError(400, "Error while creating user"));
    }
  //creating the token so that session remains intact
    try {
        const token = await sign(
            { sub: newUser._id },
            config.jwt_secrete as string,
            {
                expiresIn: "7d",
                algorithm: "HS256",
            }
        );
        res.status(201).json({ accessToken: token });
    } catch (error) {
        return next(createHttpError(500, "Error while creating user!!"));
    }
};

const userLogin = async(req:Request,res:Response,next:NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(createHttpError(404,"All fields are required!!"))
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(createHttpError(400, "User Not Found"));
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(createHttpError(400,"Password not matched!!"))
        }
        //create token for access
        const token = await sign({ sub: user._id }, config.jwt_secrete as string, { expiresIn: '7d', algorithm: 'HS256' });
        res.status(200).json({ accessToken: token });

    } catch (error) {
        return next(createHttpError(500,"Something went Wrong!!"))
    }
} 


export { userRrgistration,userLogin };
