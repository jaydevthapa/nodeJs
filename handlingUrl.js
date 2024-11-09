/*
URl(unifrom resource locator)
url looks like "https://google.com"
*/

const http = require("http");
const fs = require("fs");
const url =require("url");// download firist and then require it to download you have to search into "npm.org"
const makeServer= http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}: new request recived \n`;
    if(req.url==="/favicon.ico") return res.end();  //ignore favicon request 
const myUrl= url.parse(req.url,true);
console.log(myUrl)
    fs.appendFile("./log.txt", log, (err, data)=>{
        switch(myUrl.pathname){
            case"/":
            res.end("this is home page");
            break;
            case"/about":
         const username = myUrl.query.myname;
         res.end(`your name is ${username} isn't it`);
            break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("here are result for your " +search);
            default:
            res.end("hello what are you looking for you are in wrong url??")
        }
    });
    });

    makeServer.listen(3000,()=>{
        console.log("server started");
    });
    




    // if you want to handle your url download the package just hit this command in your terminal "npm i url" and then require url 
    //protocal,domain,path,query_parameters