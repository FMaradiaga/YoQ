
const  { Router } = require('express');
const consultas = Router();

const Variables = {};
var admin = require("firebase-admin");
const db = admin.firestore();




consultas.get('/consulta', (request, response) => {
  let param = request.query.param;
  //Variables.param = param;//para mandar array
  response.send(param);
  
});

consultas.get('/HBS31', (request, response) => {//consulta de insercion de comercio parte 1
  let nombre = request.query.vcomer_name;
  let razon = request.query.vcomer_razon;
  let prospecto = request.query.vcomer_prospec;

  const res = db.collection('tb_comercios').add({//add crea si no hay id,, set crea si no hay id pero lo edita si hay id
    nombre_comercio: nombre,
    razon_social: razon,
    prospecto: prospecto
  });
  
  console.log('Added document with ID: ', res);
  response.render("registerdcomer");
  
});

consultas.post('/post', (request, response) => {
  let param = request.body.parametro;
  response.json(param);
  
});

module.exports.consultas = consultas;
