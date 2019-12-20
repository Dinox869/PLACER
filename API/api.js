const express=require('express');
const app=express();

const routes=require('./modules/routes.js');
app.listen(4000,()=>{
    console.log('Housing running on port 4000');
});
routes(app);