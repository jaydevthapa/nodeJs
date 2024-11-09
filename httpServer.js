// there is builin module in nodejs that helps us to make http server so we have to require it

//http is a server where user request and gets desirable response

const http = require("http");
const fs = require("fs");// using fs to make log table and append file to track record of incomming request
const makeServer= http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}: new request recived \n`;
    fs.appendFile("./log.txt", log, (err, data)=>{
        switch(req.url){
            case"/":
            res.end("this is home page");
            break;
            case"/about":
            res.end("my name is jaydev thapa and you?");
            break;
            default:
            res.end("hello what are you looking for you are in wrong url??")// response to the user 
        }
    });
    // using a switch case is called multi route

//console.log("new request received"); //shows in terminal
    });// creates a web server for us in this we have to pass callback funtion for request and response 

    makeServer.listen(3000,()=>{
        console.log("server started");
    });// we need a port number to make liten to the user with response and make a call back function to know weather the server works properly or not
    