'use strict'

var express = require('express');

var app = express();

app.get('/' , function(req , res){
    res.send("Hello world");
});

app.listen(3000 , function(){
    console.log("服务器监听在300.....");
});