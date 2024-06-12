const pokemon = require('./data.js')
const game = {
    party: [],
    difficulty: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 9 },
      { name: "rare candy", quantity: 99 },
    ],
}
console.log(pokemon)

//Exercise 3
game.difficulty = 'Medium'
console.log(`The game difficulty level is ${game.difficulty}`)

//Exercise 4

// const startPokemon = pokemon.find(p => p.starter === true);
//     game.party.push(startPokemon)


//Exercise 5
const pokemon25 = pokemon.find(p => p.name === 'Pikachu');
    game.party.push(pokemon25)
const pokemon4 = pokemon.find(p => p.name === 'Squirtle');
    game.party.push(pokemon4)
const pokemonFire = pokemon.find(p => p.name === 'Charmander')
    game.party.push(pokemonFire)
const pokemon1 = pokemon.find(p => p.name === 'Bulbasaur')
    game.party.push(pokemon1)
console.log(game.party)

//Exercise 6:
game.gyms.forEach(gym => {
    if (gym.difficulty < 3){
        gym.completed = true
    }
})
console.log(game.gyms)

//Exercise 7: 
//loop through the party array 
const newBulbasaur = game.party.findIndex(pokemon => pokemon?.number === 1);
const ivysaur = pokemon.find(p => p.number === 2);
const newPickachu = game.party.findIndex(pokemon => pokemon?.number === 25);
const raichu = pokemon.find(p => p.number === 26);
const newSquirtle = game.party.findIndex(pokemon => pokemon?.number === 7);
const wartortle = pokemon.find(p => p.number === 8);
const newCharmander = game.party.findIndex(pokemon => pokemon?.number === 4);
const charmeleon = pokemon.find(p => p.number === 5);

game.party = game.party.map(poke => {
  if(poke.name === 'bulbasaur'){
    return pokemon.find[1]
  }else if(poke.name === 'Pikachu'){
    return pokemon.find[25]
  }else if(poke.name === 'Charmander'){
    return pokemon.find[4]
    }else if(poke.name === 'Squirtle'){
      return pokemon.find[7]
    }else{
      return
    }
  }
)
console.log(game.party)
//})

if (newBulbasaur !== -1 && ivysaur) {
    game.party.splice(newBulbasaur, 1, ivysaur);
}
if (newPickachu !== -1 && raichu) {
    game.party.splice(newPickachu, 1, raichu);
}
if (newSquirtle !== -1 && wartortle) {
    game.party.splice(newSquirtle, 1, wartortle);
}
if (newCharmander !== -1 && charmeleon) {
    game.party.splice(newCharmander, 1, charmeleon);
}

console.log(game.party);

//Exercise 8:
game.party.forEach(pokemon => {
    if (pokemon) {
        console.log(pokemon.name);
    }
});

//Exercise 9
const newPokemon = pokemon.filter(pokemon => pokemon.starter);
newPokemon.forEach(pokemon => {
    console.log(pokemon.name)
}) 

//Exercise 10
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
  };
  
  game.catchPokemon(pokemon[3]);
  console.log(game.party)
//Exercise 11
game.catchPokemon = function(pokemonObj){
//game.catchPokemon = (pokemonObj) => { another way of saying arrow function
    game.party.push(pokemonObj);
    //const pokeballIndex = game.items.findIndex(item => item.name === "pokeball");
    // if (pokeballIndex !== -1) {
    //   game.items[pokeballIndex].quantity-= 1;
    // };
    pokeballs = game.items.find(item => item.name === 'pokeball')
    if(pokeballs) pokeballs.quantity -= 1;
}//arrow function does not work with 'this'
  game.catchPokemon(pokemon[19]); 
  console.log(game.items);
  
//Exercise 12
game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
      gym.completed = true;
    }
  });
  console.log(game.gyms)
  
// Exercise 13
game.gymStatus = function() {
    let gymTally = { completed: 0, incomplete: 0 };
    this.gyms.forEach(gym => {
      if (gym.completed === true) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
    console.log(gymTally);
};
  
  game.gymStatus();
  
//Exercise 14
game.partyCount = function() {
    return this.party.length;
  };
  

//Exercise 15
game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
      gym.completed = true;
    }
  });
  game.gymStatus();

  

//Exercise 16
console.log(game)

//Exercise 17
game.party.sort((a, b) => b.hp - a.hp)
console.log(game.party)

//Exercise 18
game.collection = []
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballIndex = this.items.findIndex(item => item.name === "pokeball");
  if (pokeballIndex !== -1) {
    this.items[pokeballIndex].quantity--;
  }

if(game.party.length < 6){
  game.party.push(pokemonObj)

  }else {
    game.collection.push(pokemonObj)
  }
};
game.catchPokemon(pokemon[19]); 
console.log(game.items);
