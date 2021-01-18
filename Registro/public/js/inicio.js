const db = firebase.firestore();

function crea_usuario() {///creamos usuario en AUTh
  var nombre = document.getElementById("regi_name").value;
  var email = document.getElementById("regi_email").value;
  var pass = document.getElementById("regi_pass").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((user) => {
      alert('Se creo Usuario!, verifica tu Email')
      var pin = aleatorio();
      actualiza_usuario(nombre, pin)
      guardar_usuario(email, pass, nombre, pin);
      verifica_usuario();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/email-already-in-use") {
        M.toast({ html: 'Correo ya registrado!!' });
      } else {
        console.log(errorCode + " - " + errorMessage);

      }
      // ..
    });
}

function verifica_usuario() {///envia correo de verificacion
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function () {    
    M.toast({ html: 'Correo de verificacion enviado!', classes: 'rounded' });
  }).catch(function (error) {
    console.log("Error: - 2: " + error.code + " + " + error.message);
  });
}

function actualiza_usuario(nombre, pin) {///cambia parametros en el AUth
  var user = firebase.auth().currentUser;
  if (user) {
    user.updateProfile({
      displayName: nombre,
      photoURL: pin
    }).then(function () {

    }).catch(function (error) {
      // An error happened.
    });
  }
}

function guardar_usuario(email, pass, nombre, pin) {//Agrega paramentros en el FIrestore
  db.collection("tb_usuarios").add({
    nombre: nombre,
    email: email,
    password: pass,
    nivel: "Usuario",
    pin: pin

  }).then(function () { }).catch(function (error) {
    console.error("Error:" + error.code + " mensaje: " + error.message);
  });
}

function aleatorio() {//genera ping aleatorio de 4 digitos
  var aleatorio = '';
  while ((aleatorio <= 1000) || (aleatorio >= 10000)) {
    aleatorio = Math.round(Math.random() * 10000);
  }
  // console.log("pin: " + aleatorio + " iteraciones: "+ c);
  return aleatorio.toString();
}

function ingeso_auth() {
  var correo = document.getElementById("vuser").value;
  var password = document.getElementById("vpass").value;
  var pin = document.getElementById("iuser").value;

  firebase.auth().signInWithEmailAndPassword(correo, password)///-------------primer intenro de validacion - tomara el corre y la contraseña para logearse
    .then(function () {///---------------------------------------------------si detecta el correo y la passwor correcta pasara a la siguiente face de validacion

      var user = firebase.auth().currentUser;
      if (user.emailVerified) {
        ingresar(correo, password, pin);
      } else {
        M.toast({ html: 'Verifica tu Correo!', classes: 'rounded red lighten-1' });
        cerrar_usuario();
      }

    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/user-not-found") {
        M.toast({ html: 'Correo no registrado!!!', classes: 'rounded red lighten-1' });
      } else if (errorCode == "auth/user-disabled") {
        M.toast({ html: 'Correo deshablitado por el administrador!', classes: 'rounded red lighten-1' });
      } else if (errorCode == "auth/wrong-password") {
        M.toast({ html: 'Contraseña incorrecta!', classes: 'rounded red lighten-1' });
      } else {
        console.log("Error: - 1: " + errorCode + " - " + errorMessage);

      }

    });/////--termina el catch


}



function ingresar(email, pass, pin) {
  db.collection("tb_usuarios")
    .where("email", "==", email)
    .where("password", "==", pass)

    .get()
    .then(function (querySnapshot) {//------------------------------------recorrera la tabla usuario filtrando por correo para obtener el pin de acceso de ese usuario
      querySnapshot.forEach(function (doc) {

        if ((doc.data().pin == pin) && (doc.data().email == email) && (doc.data().email == email)) {
          M.toast({ html: 'BIENVENIDO!', classes: 'rounded teal darken-3' });
          location.href = '/1002';
        } else {
          M.toast({ html: 'PIN incorrecto!', classes: 'rounded red lighten-1' });
        }

      });

    }).catch(function (error) {
      console.log("Error getting documents: " + error.code + " - " + error.message);
    });

}

