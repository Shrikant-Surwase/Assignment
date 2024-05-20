import { config as conf } from "dotenv";  //i have used as which is alis for the same name in the code
conf();

 const _config = { // i have used _config instead of config bcoz _config is used for security purpose
     port: process.env.PORT,
     mongodab_string: process.env.MONGO_URL,
     env: process.env.NODE_ENV,
     jwt_secrete:process.env.JWT_SECRETE
     

}

export const config = Object.freeze(_config); //make sure freeze property is for read-only mode in js

