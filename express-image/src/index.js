var Chance = require('chance');

var chance = new Chance();

for(i = 0; i < 10; i++){
    console.log("Bonjour " + chance.name());
}
