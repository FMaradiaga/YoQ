eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('38(16(17,14,10,12,11,15){11=16(10){13 10.18(36)};21(!\'\'.22(/^/,32)){20(10--){15[10.18(14)]=12[10]||10.18(14)}12=[16(11){13 15[11]}];11=16(){13\'\\\\33+\'};10=1};20(10--){21(12[10]){17=17.22(34 39(\'\\\\19\'+11(10)+\'\\\\19\',\'23\'),12[10])}}13 17}(\'35 6={7:"8",9:"0.14.2",19:"10://0-15-5.29.2",23:"0",11:"0.31.2",30:"3",12:"1:3:27:24",26:"37-4"};\',25,25,\'52||63|62|61|60|59|58|57|56|55|54|53|51|40|50|49|48|47|46|45|44|43|42|41\'.28(\'|\'),0,{}))',10,64,'||||||||||c|e|k|return|a|d|function|p|toString|b|while|if|replace|g|m||n|l|split|f|j|i|String|w|new|o||h|eval|RegExp|storageBucket|var|measurementId|d5f7940010577962760a38|web|appId|messagingSenderId|appspot|G|projectId|firebaseio|default|yoqregistro|https|databaseURL|firebaseapp|authDomain|AIzaSyC1FagaVUKZ2J0dVLpLZPRYwakAcnmwGUw|apiKey|firebaseConfig|rtdb|7EE73Y8DYS|413773113897|com'.split('|'),0,{}))
  firebase.initializeApp(firebaseConfig);

  function cerrar_usuario(){//cerramos secion
    firebase.auth().signOut().then(function() {
     location.href = '/';//salir
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

