import app from "./app.js";

//env variables
//check PORT if not then default 8000
const PORT = process.env.PORT || 8000;

console.log("OK: "+process.env.NODE_ENV);

//listen to PORT defined
app.listen(PORT,()=>{
    console.log('server is listening at '+PORT);
});