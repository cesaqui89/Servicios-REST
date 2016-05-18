exports = module.exports= function(app, mongoose){ 
//variables globales
var Schema = mongoose.Schema;
//definicion del modelo
var UsuarioSchema = new Schema({
  nombre        :   {type: String},
  usuario   	:   {type: String},
  password      :   {type: String}
})

mongoose.model('Users', UsuarioSchema);
};