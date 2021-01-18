
const  { Router } = require('express');
const paginas = Router();


var admin = require("firebase-admin");
const db = admin.firestore();

//////////---usada inicio
paginas.get('/' , (request ,  response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
    response.render('login');

});
//////////---usada para registrar usuarios nuevos
paginas.get('/1001' , (request ,  response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
    response.render('registeruser');

});
//////////---usada luego del login
paginas.get('/1002' , (request ,  response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
    response.render('registercomer');

});

//////////---usada luego del registercomer
paginas.get('/1003', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('registerdcomer');

});

paginas.get('/test', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('test');

});

paginas.post('/login', (request, response) => {
    let email = request.body.email;
    let idToken = request.body.user;
    let pass = request.body.pass;
    response.render('login');
    ////---------------------------------INGRESA CON USUARIO
 
});

paginas.get('/login', (request, response) => {
  response.render('login');
  ////---------------------------------INGRESA CON USUARIO
});


module.exports.paginas = paginas;