var schema = require('./src/static/schema.js');
function init(app){
  app.get('/',function(req,res){
    res.render('visit');
  });
  app.post('/home',function(req,res){
    res.redirect('/'+req.body.name);
  });
  app.get('/:name',function(req,res){
    var idnew = 0;
    var Users = schema.Users;
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
      example.save(function(err){
        if(err && (11000 === err.code || 11001 === err.code)){
          return err;
        }
      });

    });
    res.render('app');
  });
  app.post('/images',function(req,res){
    var Images = schema.Images;
    var example = new Images({base64 : req.body.imgBase64, user : req.body.user});
    example.save(function(err){
      console.log("WTF");
      if(err)
        return handleError(err);
      res.type('json');
      res.send({ some: JSON.stringify({response:'json'}) });
    });
  });
  app.post('/getImage',function(req,res){
    var Images = schema.Images;
    Images.find({user:req.body.user}).sort('-name').limit(1).exec(function(err,result){
      if(!err){
        res.type('json');
        res.send({some : JSON.stringify(result)});
      }
      else{
        return handleError(err);
      }
    });
  });
}

module.exports.init=init;
