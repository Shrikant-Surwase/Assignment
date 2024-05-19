

import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async() => {
    try {
        //resistering the entry brfore calling await function
         mongoose.connection.on('connected', () => {
           console.log('Database connected succesfully !!');
           
        })
        mongoose.connection.on('error', (err) => {
            console.log('Database connection error !!',err);
        })
        await mongoose.connect(config.mongodab_string as string) //type casting we can say in typescript
       
    } catch (error) {
        console.log(error)
        process.exit(1); //for stoping application run
    }
} 
export default connectDb;