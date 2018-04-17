var app = require('./config/express')();

app.get('/', function(req, res){
    res.render('index');
});

app.get('/catalogo', function(req, res){
    res.render('roldanas/catalogo');
});

app.get('/roldana', function(req, res){
    res.render('roldana');
});


app.listen(3000, function(){
    console.log("Roldanas Rodando");
});