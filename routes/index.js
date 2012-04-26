var _ = require('underscore');
var http = require('http');
// TODO: This should be read from a database
var heroes = [
  {
    name: 'Diciembre 2011',
    facts: [
      'No existe la teoría de la evolución, tan sólo una lista de las' +
      ' especies que Chuck Norris permite vivir. ',
      'Chuck Norris no te pisa un pie, sino el cuello.',
      'Chuck Norris borró la papelera de reciclaje.']
  },
  {
    name: 'Enero 2012',
    facts: [
      'Science is defined as MUKs futile attempt at learning ' +
      'Bruce Schneiers private key.',
      'Others test numbers to see whether they are prime. Bruce ' +
      'decides whether a number is prime.']
  },
  {
    name: 'Febrero 2012',
    facts: [
      'Pérez-Reverte se baja música en casa de Ramoncín.',
      'Pérez-Reverte no necesita investigar para escribir novela ' +
      'histórica, el pasado cambia conforme teclea en la máquina.']
  }
];
 
exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.login = function(req, res) {
  res.render('login')
}

exports.loginPost = function(req, res) {
  console.log("a " + req.params.txtEmail);
  //Cogemos el email y el password.
  /*var email = $("#txtEmail").val();
  var password = $("#txtPassword").val();*/

  //Comprobamos primero que esten llenos los dos campos.
  /*if ((email == "") || (password == ""))
  {
    //Esta vacio.
    alert("Debes rellenar los campos de Email y Contraseña.");
  }else{
    console.log("1");
    //Estan completados. Cogemos la BBDD.
    var mongoose = require('mongoose');
    var db = mongoose.connect('mongodb://patxa:piribi2012@dbh61.mongolab.com:27617/patxaran');
    console.log("1-5");
    var User = new Schema({
      nick : String,
      email : String,
      password : String
    })

    mongoose.model('User', User);
    var User = mongoose.model('User');

    console.log("2");

    User.findOne({ email: "sirmartin@gmail.com" }, function(err, doc) {
      //doc is a document.
      console.log("3");
    });

    console.log("4");
  }*/
  res.render('index')
}

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) {
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}

exports.addArticulo = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
 
  hero.articulos.push(req.body.articulo);
  res.json({status: 'ok' });
}