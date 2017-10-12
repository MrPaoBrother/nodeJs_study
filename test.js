/*if(typeof(window) == 'undefined'){
    console.log('NodeJs...');
}else{
    console.log('Browser');
}*/

//----------------fs模块---------------------

'use strict'

/*var fs = require('fs');

fs.readFile('sample.txt' , 'utf8' , function(err , data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

/*var fs = require('fs');
try{
    var data = fs.readFileSync('sample1.txt' , 'utf8');
    console.log(data);
}catch(err){
    console.log("错误===>"+err);
}*/

var fs = require('fs');
/*var data = "写入的内容....";
fs.writeFile('sample.txt' , data , function(err , data){
    if(err){
        console.log(err);
    }else{
        console.log("ok");
    }
});*/

/*fs.stat('sample.txt' , function(err, stat){
    if(err){
        console.log(err);
    }else{
        console.log("isFile:"+stat.isFile());
        console.log("isDirectory:"+stat.isDirectory());
        if(stat.isFile()){
            console.log(stat.size);
            console.log(stat.birthtime);
            console.log(stat.mtime);
        }
    }
});*/
/*var rs = fs.createReadStream('sample.txt' , 'utf-8');
rs.on('data' , function(chunk){
    console.log('DATA:');
    console.log(chunk);
});
rs.on('end' , function(){
    console.log('END');
});
rs.on('error' , function(err){
    console.log(err);
});*/

var fs = require('fs');

var ws1 = fs.createWriteStream('sample.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('sample.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();


























