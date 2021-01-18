
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

paginas.get('/1003' , (request ,  response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
    response.render('registerdcomer');

});




module.exports.paginas = paginas;