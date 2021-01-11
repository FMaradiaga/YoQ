
const  { Router } = require('express');
const router = Router();

const Variables = {};


router.get('/' , (request ,  response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
    response.render('index');

});


router.get('/login', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('login');

});
router.get('/registercomer', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('registercomer');

});

router.get('/registeruser', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('registeruser');

});


router.get('/registerdcomer', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('registerdcomer');

});

router.get('/dash', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('dash');

});

router.get('/cdiario', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('cdiario');

});

router.get('/bcomer', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('bcomer');

});

router.get('/buser', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('buser');

});


router.get('/perfil', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('perfil');

});
router.get('/report', (request, response) => {
  response.set('Cache-Control', 'public , max-age=300, s-maxage=600');
  response.render('report');

});
module.exports = Variables;

module.exports.router = router;


