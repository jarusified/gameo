var exports = module.exports;
var mongoose = require("mongoose");
var usersSchema = new mongoose.Schema({
  id : { type : Number},
  name : { type : String, unique : true},
});
var gamesSchema = new mongoose.Schema({
  id : { type : Number},
  user_id : { type : Number},
  type : { type : Number},
  desc : { type : String}
});
var globalsSchema = new mongoose.Schema({
  object_types : { type : mongoose.Schema.Types.Mixed},
  control_types : { type : mongoose.Schema.Types.Mixed}
});
var objectsSchema = new mongoose.Schema({
  id : { type : Number},
  game_id : { type : Number},
  states : { type : mongoose.Schema.Types.Mixed}
});
var controlsSchema = new mongoose.Schema({
  game_id : { type : Number},
  controls : { type : mongoose.Schema.Types.Mixed}
});
var imageSchema = new mongoose.Schema({
  base64 : {type : String},
  user : {type : String}
});
var Users = mongoose.model("Users", usersSchema),
    Games = mongoose.model("Games", gamesSchema),
    Globals = mongoose.model("Globals", globalsSchema),
    Objects = mongoose.model("Objects", objectsSchema),
    Controls = mongoose.model("Controls", controlsSchema),
    Images = mongoose.model("Images",imageSchema);
exports.Users = Users;
exports.Games = Games;
exports.Globals = Globals;
exports.Objects = Objects;
exports.Controls = Controls;
exports.Images = Images;
