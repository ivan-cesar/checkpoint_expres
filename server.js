// charger les choses dont nous avons besoin
var express = require('express');
const now = new Date();
const heure = now.getHours();
const jour = now.getDay();

var app = express();
// Fichier statique
app.use('/public', express.static('public'))
app.use('/css', express.static(__dirname + 'public/css/'))
app.use( '/js', express.static(__dirname + 'public/js/'))
app.use('/img', express.static(__dirname + 'public/img/'))

// définir le moteur d'affichage à ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// utiliser res.render pour charger un fichier de vue ejs

// index page
app.get('/', function(req, res) {
    if(((jour != 0) || (jour != 6)) && ((heure < 9) || (heure >= 17))){
        res.render('pages/404');

    }else{
        res.render('pages/index');
    }
});

// service page
app.get('/service', function(req, res) {
    if(((jour != 0) || (jour != 6)) && ((heure < 9) || (heure >= 17))){
        res.render('pages/404');
    }else{
    res.render('pages/service');
    }
});

// contact page
app.get('/contact', function(req, res) {
    if(((jour != 0) || (jour != 6)) && ((heure < 9) || (heure >= 17))){
        res.render('pages/404');
    }else{
    res.render('pages/contact');
     
    }
});

app.listen(8080);
console.log(heure + 'h 8080 est le  port');
