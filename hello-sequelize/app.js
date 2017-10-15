/*const config = require('./config');

const Sequelize = require('sequelize');

//配置sequelize
var sequelize = new Sequelize(config.database ,config.username , config.password ,{
    host:config.host , 
    dialect:'mysql' ,
    pool:{
        max:5 , 
        min:0 ,
        idle:30000
    }
});

var Pets = sequelize.define('pets',{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    } ,
    name:Sequelize.STRING(100),
    gender:Sequelize.BOOLEAN ,
    birth:Sequelize.STRING(10),
    createdAt:Sequelize.BIGINT ,
    updatedAt:Sequelize.BIGINT,
    version:Sequelize.BIGINT
},
{
    timestamps:false
});

var now = Date.now();*/
//用await方式插入一条数据

/*(async ()=>{
    var dog = await Pets.create({
        id:'g-'+now,
        name:'小哥',
        gender:false,
        birth:'1997-12-28' ,
        createdAt:now ,
        updatedAt:now ,
        version:0
    });

    //输出调试...........
    console.log('created:'+JSON.stringify(dog));
})();*/

//await 方式查询一条数据

/*(async()=>{
    var animals = await Pets.findAll({
        where:{
            name:'雪梦'
        }
    });
    console.log("发现了"+animals.length+"个品种....");
    for (var animal in animals){
        console.log(JSON.stringify(animal));
    }
})();*/

//更新一条数据

/*(async ()=>{
    var power = await Pets.find({
        where:{
            name:'雪梦'
        }
    });
    power.updatedAt = Date.now();
    power.version++;
    await power.save();
})();*/

//删除一条数据

/*(async ()=>{
    var xiaoge = await Pets.find({
        where:{
            id:'g-1508045168425'
        }
    });
    console.log("删除小哥记录");
    await xiaoge.destroy();
    console.log("删除成功...........");
})();*/

//const db = require('./init-db');

/*const model = require('./model');
var Users = model.users;*/
/*var user = await Users.create({

});*/

const model = require('./model')
var Pet = model.Pet;
(async ()=>{
    var cat = await Pet.create({
        name:'猫' ,
        gender: true ,
        birth : '1995-06-04'
    });
    console.log("created:"+JSON.stringify(cat));
})();











































