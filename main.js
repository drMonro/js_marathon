import Pokemon from "./pokemon.js";
import Actions from "./actions.js";
import random from "./utils.js";
import {pokemons} from "./pokemons.js";


// let generatePokemon = () => pokemons[random(pokemons.length - 1)];
//
//
// const player = generatePokemon();
// const enemy = generatePokemon();
//
// const player1 = new Pokemon({
//     ...player,
//     selectors: 'player1'
// })
//
//
// const player2 = new Pokemon({
//     ...enemy,
//     selectors: 'player2'
// })
//
// let renderNames = (player, enemy) => {
//     let playerName = document.querySelector('#name-player1');
//     let enemyName = document.querySelector('#name-player2');
//     playerName.innerText = player.name;
//     enemyName.innerText = enemy.name;
// };
//
// let renderAvatars = (player, enemy) => {
//     let playerImage = document.querySelector('.player1').querySelector('img');
//     let enemyImage = document.querySelector('.player2').querySelector('img');
//     playerImage.src = player.img;
//     enemyImage.src = enemy.img;
// };
//
// renderNames(player, enemy);
// renderAvatars(player, enemy);

// //
// const attacks1 = '1';
// const attacks2 = '1';
// const adjustButtons = new Actions({attacks1, attacks2})


class Game {
    constructor() {
        this.startGame();
    };

    startGame = () => {


        let character1 = this.generatePokemon();

        let character2 = this.generatePokemon();
        let attacks1 = character1.attacks;
        let attacks2 = character2.attacks;

        let player1 = new Pokemon({
            ...character1,
            selectors: 'player1'
        });
        let player2 = new Pokemon({
            ...character2,
            selectors: 'player2'
        });

        // console.log(character1.img);
        // console.log(player1);


        this.renderNames(player1, player2);

        this.adjustButtons(attacks1, attacks2);


        // console.log(player1);
        this.renderAvatars(player1, player2)
    };



    generatePokemon = () => {

        let result = pokemons[random(pokemons.length - 1)];
        // console.log(result)
        return result
    };

    renderNames = (player, enemy) => {
        // console.log(player.img)
        let playerName = document.querySelector('#name-player1');
        let enemyName = document.querySelector('#name-player2');
        playerName.innerText = player.name;
        enemyName.innerText = enemy.name;
    };

    adjustButtons = (attacks1, attacks2) => {
        new Actions({attacks1, attacks2})
    };
    //
    renderAvatars = (player, enemy) => {
        let playerImage = document.querySelector('.player1').querySelector('img');
        let enemyImage = document.querySelector('.player2').querySelector('img');
        console.log(player)
        playerImage.src = player.img;
        enemyImage.src = enemy.img;
    };

}

const startGame = new Game();
// console.log(startGame);
// console.log('startGame');


export {startGame};
