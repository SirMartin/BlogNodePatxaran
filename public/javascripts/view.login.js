$(function() {
  
  $('#btnLogin').click(function() {
    
    //Cogemos el email y el password.
    var email = $("#txtEmail").val();
    var password = $("#txtPassword").val();

    //Comprobamos primero que esten llenos los dos campos.
    if ((email == "") || (password == ""))
    {
      //Esta vacio.
      alert("Debes rellenar los campos de Email y Contraseña.");
    }else{
      alert("1");
      //Estan completados. Cogemos la BBDD.
      var mongoose = require('mongoose');
      var db = mongoose.connect('mongodb://patxa:piribi2012@dbh61.mongolab.com:27617/patxaran');
      alert("1-5");
      var User = new Schema({
        nick : String,
        email : String,
        password : String
      })

      mongoose.model('User', User);
      var User = mongoose.model('User');

      alert("2");

      User.findOne({ email: "sirmartin@gmail.com" }, function(err, doc) {
        //doc is a document.
        alert("3");
      });

      alert("4");
    }
  });
});