import Pokemon from "./pokemon.js";
import Actions from "./actions.js";
import random from "./utils.js";
import {pokemons} from "./pokemons.js";
// import {Game} from "./game.js";



let generatePokemon = () => pokemons[random(pokemons.length - 1)];


// console.log(Game);

// const game = new Game()


const player = generatePokemon();
// const player = Game.generatePokemon();
const enemy = generatePokemon();

const player1 = new Pokemon({
    ...player,
    selectors: 'player1'
})


const player2 = new Pokemon({
    ...enemy,
    selectors: 'player2'
})

let renderNames = (player, enemy) => {
    let playerName = document.querySelector('#name-player1');
    let enemyName = document.querySelector('#name-player2');
    playerName.innerText = player.name;
    enemyName.innerText = enemy.name;
};

let renderAvatars = (player, enemy) => {
    let playerImage = document.querySelector('.player1').querySelector('img');
    let enemyImage = document.querySelector('.player2').querySelector('img');
    playerImage.src = player.img;
    enemyImage.src = enemy.img;
};



renderNames(player, enemy);
renderAvatars(player, enemy);


const attacks1 = player1.attacks;
const attacks2 = player2.attacks;
const adjustButtons = new Actions({attacks1, attacks2})





export {player1, player2};
