'use strict'

/*var http = require('http');

var server = http.createServer(function(request , response){
    console.log(request.method+":"+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello World</h1>');
});

server.listen(8080);
console.log("服务器在8080端口监听中........")*/

/*var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));*/

/*var path = require('path');

var workDir = path.resolve('.');

console.log(workDir);

var filePath = path.join(workDir , 'pub' , 'index.html');

console.log(filePath);
*/

var
    path = require('path'),
    http = require('http'),
    url = require('url'),
    fs = require('fs');
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir' + root);

var server = http.createServer(function(request , response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root , pathname);

    fs.stat(filepath , function(err , stat){
        if(!err && stat.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 not found');
        }
    });
});

server.listen(8080);

console.log("服务器启动在8080.....");



















