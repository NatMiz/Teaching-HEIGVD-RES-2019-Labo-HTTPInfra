const Chance = require('chance');
const Express = require('express');

var app = Express();
var chance = new Chance();

// console.log("Bonjour " + chance.name());
app.get('/test', function(req, res){
    res.send('Test is working\n');
});

app.get('/', function(req, res){
    res.send(zootopiaRandom());
});

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000...');
});

function zootopiaRandom(){
    // We'll return between 1 and 8 animals
    let numberOfAnimals = chance.d8();
    console.log('Number of animals: ' + numberOfAnimals + '\n');
    // We'll returns an array of animals
    let animals = [];

    for(let i = 0; i < numberOfAnimals; ++i){
        animals.push({
            name: chance.suffix() + ' ' + chance.animal(),
            profession: chance.profession(),
            city: chance.city()
        })
    }

    console.log(animals);

    return animals;
}