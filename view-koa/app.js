/*const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});
var fruits = ["香蕉" , "菠萝" , "apple"];
var s = env.render('hello.html' , {
    name:'power' , 
    fruits:fruits
});

console.log(s);

var data = {
    name:"李强",
    body:"哈哈哈哈"
};
var test = env.render('test.html' , data);
console.log(test);*/

'use strict'
const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const templating = require('./templating');

const controller = require('./controller');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production'

app.use(async (ctx , next)=>{
    console.log(`${ctx.request.method}  ${ctx.request.url}`);
    var start = new Date().getTime();
    await next();
    var end = new Date().getTime();
    var time = end - start;
    console.log("==========花费了"+time+"ms=============");
});

//查找静态文件
if(!isProduction){
    var staticFiles = require('./static-files');
    app.use(staticFiles('/static/' , __dirname + '/static'));
}

//加入 request-body (POST)
app.use(bodyParser());

//给ctx加入render方法
app.use(templating('views' , {
    noCache:!isProduction , 
    watch:!isProduction
}));

//加入路由....
app.use(controller());

app.listen(3000);

console.log("服务器在3000端口启动..................");





























