import Pokemon from "./pokemon.js";
import Actions from "./actions.js";
import { pokemons } from "./pokemons.js";

const pikachu = pokemons.find(item => item.name === 'Pikachu');
const charmander = pokemons.find(item => item.name === 'Charmander');

const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player1'
})


const player2 = new Pokemon({
    ...charmander,
    // name: 'Charmander',
    // hp: 200,
    selectors: 'player2'
})

const actions = [
    {
        name: 'Thunder Jolt',
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
        limit: 7
    },
    {
        name: 'Fireball',
        elButton: document.getElementById('btn-kick-spec'),
        damageMultiplier: 30,
        limit: 3
    }
]

const attacks = player1.attacks;
// console.log(attacks);

// const adjustButtons = new Actions({actions})
const adjustButtons = new Actions({attacks})

export {player1, player2, actions};

