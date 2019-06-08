const Chance = require('chance');
const Express = require('express');

var app = Express();
var chance = new Chance();

// console.log("Bonjour " + chance.name());
app.get('/test', function(req, res){
    res.send('Test is working\n');
});

app.get('/', function(req, res){
    res.send('Hello RES\n');
});

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000...');
});