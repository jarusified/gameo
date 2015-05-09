var exports = module.exports;
var mongoose = require("mongoose");
exports.wrapper = function(){
  var usersSchema = new mongoose.Schema({
    id : { type : Number},
    name : { type : String},
  });
  var gamesSchema = new mongoose.Schema({
    id : { type : Number},
    user_id : { type : Number},
    type : { type : Number},
    desc : { type : String}
  });
  var globalsSchema = new mongoose.Schema({
    object_types : { type : Types.Mixed},
    control_type : { type : Types.Mixed}
  });
  var objectsSchema = new mongoose.Schema({
    id : { type : Number},
    game_id : { type : Number},
    states : { type : Types.Mixed}
  });
  var controlsSchema = new mongoose.Schema({
    game_id : { type : Number},
    controls : { type : Types.Mixed}
  });
  var Users = mongoose.model("Users", usersSchema);
  var Games = mongoose.model("Games", usersSchema);
  var Globals = mongoose.model("Globals", usersSchema);
  var Objects = mongoose.model("Objects", usersSchema);
}
