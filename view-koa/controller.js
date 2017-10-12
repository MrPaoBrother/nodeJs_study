//用来扫描 controllers文件夹的内容....

const fs = require('fs');

function addControllers(router){
    var files = fs.readdirSync(__dirname+'/controllers');
    //得到所有的js文件
    var js_files = files.filter((f)=>{
        return f.endsWith('.js');
    });

    for (var f of js_files){
        console.log(`进程将控制==>${f}`);
        var mapping = require(__dirname+'/controllers/'+f);
        addMapping(router , mapping);
    }
}

function addMapping(router , mapping){
    for (var url in mapping){
        if(url.startsWith('GET ')){
            var path = url.substring(4);
            router.get(path , mapping[url]);
            console.log("Mapping url GET ==>" + path);
        }else if (url.startsWith('POST ')){
            var path = url.substring(5);
            router.post(path , mapping[url]);
            console.log("Mapping url Post=>" + path);
        }else{
            console.log("不正确的url:"+url);
        }
    }
}

module.exports = function(dir){
    var controllers_dir = dir || 'controllers';
    var router = require('koa-router')();
    addControllers(router);
    return router.routes();
}