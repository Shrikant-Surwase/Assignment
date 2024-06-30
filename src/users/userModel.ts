import mongoose from "mongoose";
import { User } from "./userType";
const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        requied: true,
        
    },
    date: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        requied: true,
        unique:true
    },
    password: {
        type: String,
        requied: true,

    }
},
    {
    timestamps: true
}
)
export default mongoose.model<User>("User",userSchema)