function init(app){
  app.get('/',function(req,res){
    res.render('app');
  });
  app.get('/:name',function(req,res){
    var idnew = 0;
    var Users = require('./src/static/schema.js').Users;
    //Users.remove({_id : "554e1fc5f0edc7f8d4b41fe1"},function(){console.log("done");});
    Users.find({}).sort({id : -1}).limit(1).exec(function(err,result){
      if(result==''){
        idnew = 1;
      }
      else{
        idnew = parseInt(result[0].id)+1;
      }
      var user = {id : idnew ,name : req.params.name};
      var example = new Users(user);
      console.log(example);
      example.save(function(err){
        if(err && (11000 === err.code || 11001 === err.code)){
          return err;
        }
      });

    });
    res.render('app');
  });
}

module.exports.init=init;
