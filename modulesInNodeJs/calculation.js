/*
modules means way to organize code by dividing it into seperate files and making it reusable across different parts of application.
*/
// require means importing
const mathFunction = require("./mathfunction");
console.log("the math value of add is", mathFunction.addFn(2,4));
console.log("the math value of subtraction is", mathFunction.subFn(2,4));
console.log("the math value of multiplication is", mathFunction.mulFn(2,4));
console.log("the math value of divison is", mathFunction.divFn(4,4));
/* 
Note:
while require a module which are not buildin we should declare as dataType "dataName"= require("./dataName")
after require the module which are not builin go to that module page and export it as module.exports = functionName
you have to export so that it can be avialble for other module
*/