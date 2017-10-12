const Koa = require('koa');
const app = new Koa();


/*app.use(async (ctx , next)=>{
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello World</h1>";

});

app.listen(3000);
console.log("服务器在3000端口启动.....");*/

/*app.use(async(ctx , next)=>{
    await next();
    console.log("第一个...");
});

app.use(async(ctx , next)=>{
    console.log("第二个");
    await next();
});

app.use(async(ctx , next)=>{
    await next();
    console.log("san ge");
});

app.use(async(ctx , next)=>{
    console.log("4");
});*/

/*app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});*/


app.use(async(ctx , next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(async (ctx , next)=>{
    var start = new Date().getTime();
    await next();
    var end = new Date().getTime();
    var time = end - start;
    console.log(`耗费了${time}ms......`);
})

app.use(async (ctx , next)=>{
    
    if(ctx.request.path == '/'){
        ctx.response.type = "text/html";
        ctx.response.body = "<h1>Hello World</h1>";
    }else{
        await next();
    }
    
});

app.use(async(ctx , next)=>{
    if(ctx.request.path == '/test'){
        ctx.response.type = "text/html";
        ctx.response.body = "<h1>Hello Test</h1>";
    }else{
        await next();
    }
})






app.listen(3000);
console.log("服务器启动在3000 port..............")