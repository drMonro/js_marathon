import {pokemons} from "./pokemons.js";
import Pokemon from "./pokemon.js";
import random from "./utils.js";
import Actions from "./actions.js";

let player1
let player2

class winEnemy {
    constructor() {
        let char = this.generateRandomPokemon();
        let char2 = this.generateRandomPokemon();


        let character = new Pokemon({
            ...char,
            selectors: 'player1'
        })

        let enemy = new Pokemon({
            ...char2,
            selectors: 'player2'
        })

        player1 = character;
        player2 = enemy;


        this.renderNames(player1, player2);
        this.renderAvatars(player1, player2);

        let attacks1 = player1.attacks;
        let attacks2 = player2.attacks;

        let adjustButtons = new Actions({attacks1, attacks2});
    };

    generateRandomPokemon = () => pokemons[random(pokemons.length - 1)];




    renderNames = (player, enemy) => {
        let playerName = document.querySelector('#name-player1');
        let enemyName = document.querySelector('#name-player2');
        playerName.innerText = player.name;
        enemyName.innerText = enemy.name;
    };

    renderAvatars = (player, enemy) => {
        let playerImage = document.querySelector('.player1').querySelector('img');
        let enemyImage = document.querySelector('.player2').querySelector('img');
        playerImage.src = player.img;
        enemyImage.src = enemy.img;
    };
}

export {winEnemy, player1, player2};
