
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const exphbs = require('express-handlebars');

var serviceAccount = require("./yoqregistro-firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yoqregistro-default-rtdb.firebaseio.com"
});


const app = express();

//settins

app.engine( 'hbs', exphbs( { 
    extname: '.hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
} ) );

app.set('views', './views');
app.set('view engine' , 'hbs');



//routes

const consultas = require('./routes/consultas');

app.use(consultas.router);

exports.app = functions.https.onRequest(app);





