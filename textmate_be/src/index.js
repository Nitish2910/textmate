import dotenv from "dotenv";
import app from './app.js';

//dotEnv config
dotenv.config();

//env variables
//check PORT if not then default 8000
const PORT = process.env.PORT || 8000;

//listen to PORT defined
app.listen(PORT,()=>{
    console.log('server is listening at '+PORT);
});