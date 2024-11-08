function addNum(a,b){
    return a+b;
}
function subNum(a,b){
    return a-b;

}
function mulNum(a,b){
    return a*b;
    
}
function divNum(a,b){
    return a/b;
    
}
module.exports={
    addFn: addNum,
    subFn: subNum,
    mulFn: mulNum,
    divFn: divNum,
};
/*
note : if you have to exports only one function you can export as module.exports = functionName
 if you have to exports more than one function then you have to create object 
 is you don't create object your program will overwrite your code

*/