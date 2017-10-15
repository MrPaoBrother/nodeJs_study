//开发环境夏自动生成数据库表..........

const model = require('./model.js');
model.sync(); //这句话创建表格

console.log('init db ok.');
process.exit(0);

/*model.sync().then(()=>{
    console.log('sync done');
    process.exit(0);
}).catch((e)=>{
    console.log('failed with: '+e);
    process.exit(0);});*/