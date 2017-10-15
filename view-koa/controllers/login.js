

var login = async(ctx , next)=>{
    var username = ctx.request.body.username || '';
    var password = ctx.request.body.password || '';
    console.log("username:" + username +"\npassword:" + password);
    if(username == 'admin' && password == '123456'){
        ctx.render('login-ok.html' , {
            username:username
        });
    }else{
        ctx.render('login-failed.html' , {
            error:"用户名或者密码错误..........."
        });
    }
}

var login_get = async(ctx , next)=>{
    var username = ctx.params.username || '';
    var password = ctx.params.password || '';
    console.log("username:" + username +"\npassword:" + password);
    if(username == 'admin' && password == '123456'){
        ctx.render('login-ok.html' , {
            username:username
        });
    }else{
        ctx.render('login-failed.html' , {
            error:"用户名或者密码错误..........."
        });
    }
}

module.exports = {
    'POST /signin':login,
    'GET /signin':login_get
}

