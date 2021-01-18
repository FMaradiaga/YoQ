
const  { Router } = require('express');
const consultas_get = Router();

const Variables = {};
var admin = require("firebase-admin");
const db = admin.firestore();




consultas_get.get('/1000-1', (request, response) => {

  let categorias = [];

  db.collection('tb_categorias').get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach(doc => {
      var element = {};
      element.id = doc.id;
      element.nombre = doc.data().nombre;
      categorias.push(element);
      });
          response.json(categorias);
    })
    .catch(err => {
      console.log('Error getting documents ', err);
    });
});


module.exports.consultas_get = consultas_get;