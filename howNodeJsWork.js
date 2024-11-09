const fs= require("fs");
/*
//blocking request
console.log("hello");
const result= fs.readFileSync("./contactInfo.txt","utf-8");
console.log(result);
console.log(2);
//perform top to down.
*/





/*
// non blocking request(async operation)
console.log("222");
console.log("55")
const result= fs.readFile("./contactInfo.txt","utf-8",(err,result)=>{
console.log(result);
});
console.log("hey");
console.log("553");


//it doesnot block the file and perform task whenever the long task finish it will return the result at the end
//hence it will perfrom the small task without blocking the long task
*/

/*
A client request to server(nodejs).then it goes to event queue(which stores task in fifo order) and then the task in event loops goes 
to event loop .The work of event loop is to look at the event queue and perform the task of event queue one by one.

There are two ways to perform the task of event loop according to the program writeen by programmer. the two methods are:


1.blocking request(operation) also known as sync operation
  => if the request is blocking request then the event loop goes to thread pool( a pool where there are threads in simple word threads means workers).
  which are responsible for performing task
    if the thread are free then the thread perform the task and return the desirable respone to client if thread arenot free then the user have to wait for the respone.


2. non- blocking request(operation) also know as async operation
   => if the request is non blocking then the event loop process the task and give desirable response to client(user)
*/








/*
you can also see the numbers of threads avilable to perform the blocking operation by


const os = require("os");
const result = console.log(os.cpus().length)
 */