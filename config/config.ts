import { config as conf } from "dotenv";  //i have used as which is alis for the same name in the code
conf();
 const _config = {
     port: process.env.PORT,
     

}

export const config = Object.freeze(_config); //make sure freeze property is for readonly mode in js

