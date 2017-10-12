'use strict'


const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const controller = require('./controllers');
const app = new Koa();

app.use(async(ctx , next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});


app.use(bodyParser());

app.use(controller());


app.listen(3000);

console.log("3000.................");