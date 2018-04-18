var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './apps/views');
    
module.exports = function(){
    return app;
}