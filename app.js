var app = require('./config/express')();
var roldanasRoutes = require('./apps/routes/catalogo')(app);

app.listen(3000, function(){
    console.log("Roldanas Rodando");
});