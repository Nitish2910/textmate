import { ExceptionHandler } from "winston";
import app from "./app.js";
import logger from './configs/logger.config.js';

//env variables
//check PORT if not then default 8000
const PORT = process.env.PORT || 8000;

console.log("OK: "+process.env.NODE_ENV);

//listen to PORT defined
app.listen(PORT,()=>{
    logger.info('server is listening at '+PORT);
    console.log("process id: ",process.pid);
});

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    ExceptionHandler();
};
process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

//SIGTERM
process.on("SIGTERM",() =>{
    if(server){
        logger.info("Server closed.");
        process.exit(1);
    }
});
