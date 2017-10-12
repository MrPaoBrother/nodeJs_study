const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();

const app = new Koa();


app.use(async (ctx , next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

router.get('/hello/:name' , async(ctx , next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello , ${name} !</h1>`

});

router.get('/' , async(ctx , next)=>{
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;

});

router.post('/signin' , async(ctx , next)=>{
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`用户填写的Name:${name} , Password:${password}`);
    if(name == "admin" && password == "123456"){
        ctx.response.body = `欢迎${name}!`
    }else{
        ctx.response.body = `<a href="/">Try Again</a>`
    }
});


app.use(bodyParser());  //post中间件,必须在routes之前注册....(传表单....)

app.use(router.routes()); //将路由器注册进入Koa(也是一个中间件....)

app.listen(3000);

console.log("3000.......................");

