if (document.readyState == 'loading') {
    document.getElementById("cuerpo").style.display = "none";

firebase.auth().onAuthStateChanged(function(user) {///observador de seciones
  
  if (user) {
    // User is signed in.
      
    M.toast({html: 'Usuario Sign IN!'});
    if(user.emailVerified){
      M.toast({html: 'Usuario verificado!'});
      document.getElementById("cuerpo").style.display = "";
    }else{
        location.href = '/';
    }
  }else{
    location.href = '/';
  }
  
});

}