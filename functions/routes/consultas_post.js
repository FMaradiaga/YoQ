
const  { Router } = require('express');
const consultas_post = Router();

var admin = require("firebase-admin");
const db = admin.firestore();


///////////////////////////////////////-------------------------------------------
consultas_post.post('/1003', (request, response) => {//consulta de insercion de comercio parte 1
  const Variables = {};
  Variables.nombre = request.body.vcomer_name;
  Variables.razon = request.body.vcomer_razon;
  if(request.body.bcomer_prospec == "on"){
    Variables.prospecto = "true"
  }else{
    Variables.prospecto = "false"
  }
  Variables.KeyDoc = hexaRamdom();


db.collection("tb_comercios").add({
  nombre_comercio: Variables.nombre,
  razon_social: Variables.razon,
  prospecto: Variables.prospecto,
  KeyDoc: Variables.KeyDoc
})
.then(function(doc) {
  Variables.id = doc.id;
  //response.render("registerdcomer", {Variables});

  response.json({Variables});
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });///---------
  
  
});
///////////////////////////////////////-------------------------------------------

///////////////////////////////////////-------------------------------------------
consultas_post.post('/1004', (request, response) => {//consulta de set de comercio parte 2
  let idDoc = request.body.vcomer_id;

  const Chekes_array = {};
  if(request.body.bcomer_facebook == "on"){Chekes_array.facebook = "true"}else{Chekes_array.facebook = "false"}
  if(request.body.bcomer_instagram == "on"){Chekes_array.instagram = "true"}else{Chekes_array.instagram = "false"}
  if(request.body.bcomer_product == "on"){Chekes_array.vende_productos = "true"}else{Chekes_array.vende_productos = "false"}
  if(request.body.bcomer_services == "on"){Chekes_array.vende_servicios = "true"}else{Chekes_array.vende_servicios = "false"}
  

  const Variables = {
    empleados: request.body.icomer_employe,
    telefono: request.body.icomer_phone,
    celular_esta: request.body.icomer_celphone,
    email_esta: request.body.vcomer_email,
    nombre_encargado: request.body.vcomer_encargado,
    contacto_encargdo: request.body.icomer_ecelphone,
    pagina_web: request.body.vcomer_web,
    redes_sociales:{
      facebook: Chekes_array.facebook,
      instagram: Chekes_array.instagram
    },
    producto_servicio:{
      producto: Chekes_array.vende_productos,
      servicio: Chekes_array.vende_servicios
    },
    horario_esta: {
      lunes:{apertura: request.body.vcomer_laper,
            cierre:request.body.vcomer_lcier},
      martes:{apertura: request.body.vcomer_maper,
              cierre:request.body.vcomer_mcier},
      miercoles:{apertura: request.body.vcomer_miaper,
                cierre:request.body.vcomer_micier},
      jueves:{apertura: request.body.vcomer_japer,
              cierre:request.body.vcomer_jcier},
      viernes:{apertura: request.body.vcomer_vaper,
              cierre:request.body.vcomer_vcier},
      sabado:{apertura: request.body.vcomer_saper,
              cierre:request.body.vcomer_scier},
      domingo:{apertura: request.body.vcomer_daper,
              cierre:request.body.vcomer_dcier}
    },
    
  };


  //Variables.categoria = request.body.icomer_cat;//categoria del comercio

console.log(Variables);

db.collection("tb_comercios").doc(idDoc).update(Variables)
.then(function(doc) {
  console.log(doc);
     response.json(Variables);
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });///---------
  
  
});
///////////////////////////////////////-------------------------------------------


function hexaRamdom(){
 
  let yourNumber = aleatorio();
  let HexaNum = Number(yourNumber).toString(16);
  return HexaNum;
}

function aleatorio(){
  var c = 0;
  var aleatorio = 0;
  const now = admin.firestore.Timestamp.now()
 
  while ((aleatorio<=100000000)||(aleatorio>=1000000000)) {
    aleatorio =  Math.round(Math.random()* now.seconds);
    c++;
  }
 return aleatorio;
}

module.exports.consultas_post = consultas_post;
