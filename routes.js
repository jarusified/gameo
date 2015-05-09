function init(app){
  app.get('/',function(req,res){
    res.render('app');
  });
}

module.exports.init=init;
