var _ = require('underscore');
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