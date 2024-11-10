/**
 http metods are 
 1.get
   =>when you want to get some data from the server. if you want some data from the server then you will request "get request"
     browser by default make get request.
 2. post
   => when you want to send AND MUTATE SOME DATA IN SERVER.// WE HAVE TO CREATSOMETHING IN DATABASE TO KEEP RECORD
 3.put
  =>uploding photo files in form
 4.patch
  =>changeing existing data
 5.delete
  =>when you need to delete something
 */


// lets move towards code 

const http = require("http");
const fs = require("fs");
const url =require("url");
const makeServer= http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.method}:${req.url}:new request recieved \n`//now it will return which type of method it is in log.txt file
    if(req.url==="/favicon.ico") return res.end(); 
   const myUrl= url.parse(req.url,true);
console.log(myUrl)
    fs.appendFile("./log.txt", log, (err, data)=>{
        switch(myUrl.pathname){
            case"/":
            if(req.method==="GET")
                res.end("this is home page");
                
            break;
            case"/about":
         const username = myUrl.query.myname;
         res.end(`your name is ${username} isn't it`);
            break;
            case'/search':
                const search = myUrl.query.search_query;
                res.end("here are result for your " +search);
                case"/Signup":
                if(req.method ==="GET")
                    res.end("this is a signup Form");
                elseif(req.method==="POST")
            //DB Query
        res.end("Sucess");
                default:
            res.end("hello what are you looking for you are in wrong url??")
        }
    });
    });

    makeServer.listen(3000,()=>{
        console.log("server started");
    });
    

 
// it is deficult and complex to handling the http so we see express framework in upcoming days