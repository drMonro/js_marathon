import Pokemon from "./pokemon.js";
import Actions from "./actions.js";

const player1 = new Pokemon({
    name: 'Pikachu',
    hp: 150,
    selectors: 'character'
})

const player2 = new Pokemon({
    name: 'Charmander',
    hp: 200,
    selectors: 'enemy'
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

const adjustButtons = new Actions({actions})

export {player1, player2, actions};

console.log(adjustButtons);

