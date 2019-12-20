module.exports={
    readAll:function(){
        if(check_database('admin')){

        }
    },
    filterDB:function(sql,fn){
        if(check_database(database)){
            
        }
    },
    writteDB:function(sql,fn){
        if(check_database(database)){
            
        }
    }  
}


//utillity functions

function check_database(database){
    //read json file to load sequrity settings
    var fs=require('fs');
    const server_config=JSON.parse(readFile('server_config/permissions.json'))
    if(database=="admin" && server_config.remote_access=="no"){
        return false
    }
    else{
        return true
    }
}

function readFile(filename){
    var fs=require('fs');
    var contents=fs.readFileSync(__dirname+'/'+filename)
    return contents
}