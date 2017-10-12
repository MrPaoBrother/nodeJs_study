'use strict'
//console.log('Hello !')
var s = 'Hello'
function greet(name){
    console.log(s + ',' + name);
}
function fuck(name){
    console.log('Fuck'+" "+name);
}
module.exports = {
    greet:greet , 
    fuck:fuck
}
