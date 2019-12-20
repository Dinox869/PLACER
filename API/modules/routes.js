const housing_db=require('./housing');
const admin_db=require('./admin_db');
module.exports=function(app){
    app.set('view engine','ejs');
    app.get('/',(req,res)=>{
        res.render('index')
    });
    app.get('/admin',()=>{
        res.render('admin_login');
    });
};