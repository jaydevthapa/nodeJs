const http = require("http");
const express = require("express");// to require express install the express package through terminal writing command("npm i express")

const app = express();// basically a handaler function
app.get("/",(req,res)=>{ // in which you have to make request
    return res.send("hello from home page");
});
app.get("/about",(req,res)=>{
    return res.send("hello from about page");
});

// const myServer = http.createServer(app);// now atomitically register the above handalers
// myServer.listen(8000,()=> console.log("server started")); // you also don't need to do this 

app.listen(8000,()=>console.log("server Started!"));


// now the code looks clean and makes easy to understand
//every thing is build in in expressjs
//makes easy to handle routes