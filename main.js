import Pokemon from "./pokemon.js";
import Actions from "./actions.js";
import random from "./utils.js";
import {pokemons} from "./pokemons.js";

const pikachu = pokemons.find(item => item.name === 'Pikachu');
const charmander = pokemons.find(item => item.name === 'Charmander');

const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player1'
})


const player2 = new Pokemon({
    ...charmander,
    selectors: 'player2'
})


function generateHitLog() {
    const allPokemons = pokemons;
    return allPokemons[random(allPokemons.length - 1)];
}


console.log(generateHitLog());

const attacks1 = player1.attacks;
const attacks2 = player2.attacks;

const adjustButtons = new Actions({attacks1, attacks2})

export {player1, player2};
