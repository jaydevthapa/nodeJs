// file handling means perform task on files such as creation of file and read
/*
const fs = require("fs"); //fs is  a file system that enables modules to interact with the file system

//creation of file there are two ways sync and async


//cretion of file with the help of sync call
fs.writeFileSync("./hello.txt","hello everyone");
// remember the way to create file using sync call as "fs.writeFileSync("./fileName", "message you want to pass")"

*/




/*
//lets move to the async call
const fs = require("fs");
fs.writeFile("./Helloeveryone","i am using async call to create file",(err)=>{});
// remember the way to create file using async by fs.writeFile("./fileName","message you want to pass", callbackFunction);
*/





/*
// task 1. make a txt file name as contact.txt enter your name and phone number and then read that file with both sync and async call 
const fs = require("fs");
fs.writeFile("./contactInfo.txt","your contact file has been created now enter your contact information",(err)=>{});

// reading file with the help of sync call
const result = fs.readFileSync("./contactInfo.txt","utf-8");
console.log(result);
// reads file sync 
*/



/*
//reading files with the help of async call
const fs = require("fs")
const result =fs.readFile("./contactInfo.txt","utf-8",(err, result)=>{
    if(err){
        console.log("err");
    
    }else {
        console.log(result);
    }
});
// one basic differance between sync and async is sync return something but async need a call back function to throw result and err of the program.
*/


// now appending file
const fs = require("fs");
fs.appendFileSync("./hello.txt",`${Date.now()}:hello\n`);
