// import {pokemons} from "./pokemons.js";
import Pokemon from "./pokemon.js";
import Backend from "./backend.js";
import random from "./utils.js";

class Game {
    generateRandomPokemon = (pokemons) => pokemons[random(pokemons.length - 1)];

    createConsole = () => {
        const consoleBlock = document.createElement('div');
        const playGround = document.querySelector('html');
        playGround.appendChild(consoleBlock).setAttribute('id', 'logs');
    };

    renderActionLimits = (button, action, counter) => {
        button.innerText = `${action.name} (${action.maxCount - counter})`;
    };

    makeActionLog = (counter, action) => {
        const consoleBar = document.getElementById('logs');
        const consoleLog = document.createElement('p');

        if (counter < action.maxCount) {
            consoleLog.innerText = `Колличество применений навыка "${action.name}" : ${counter}. Осталось: ${action.maxCount - counter}`;
            consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
        } else {
            consoleLog.innerText = `Больше нельзя применить этот навык`;
            consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
        }
    };

    renderHP = (player) => {
        this.renderHPLabel(player);
        this.renderHPBar(player);
        this.setHPStatus(player);
    };

    renderHPLabel = (player) => {
        player.elHPLabel.innerText = player.hp.current + '/' + player.hp.total;
    };

    renderHPBar = (player) => {
        player.elHPBar.style.width = (player.hp.current * 100) / player.hp.total + '%';
    };

    setHPStatus = (player) => {
        if (player.hp.current <= 60 && player.hp.current >= 20) {
            player.elHPBar.classList.add('low');
        } else if (player.hp.current < 20) {
            player.elHPBar.classList.add('critical');
        } else {
            player.elHPBar.classList.remove('critical');
            player.elHPBar.classList.remove('low');
        }
    };

    makeAction = (action, button, action2) => {
        let actionCounter = 0;
        let This = this;
        this.renderActionLimits(button, action, actionCounter);

        return function () {
            if (actionCounter < action.maxCount) {
                ++actionCounter;

                This.getDamage(This.player2, random(action.damageMultiplier));
                This.getDamage(This.player1, random(action2.damageMultiplier));


                This.makeActionLog(actionCounter, action);
                This.renderActionLimits(button, action, actionCounter);

            } else {
                button.disabled = true;

                This.makeActionLog(actionCounter, action);
            }
        }
    };

    getDamage = (player, count) => {
        const damageCount = Math.ceil((player.hp.total / 100) * count);

        if (count > (player.hp.current * 100) / player.hp.total) {
            this.disableALlActions();

            if (player.selectors === this.player1.selectors) {
                alert(`Вы проиграли! Начнёте снова?`);

                this.startGame();
            } else {
                this.player2.hp.total = 0;
                alert(`Вы выиграли! Продолжите бой?`);
                this.changeEnemy();
            }

        } else {
            if (player.selectors === this.player1.selectors) {
                this.makeHItLog(this.player1, this.player2, damageCount);
            } else {
                this.makeHItLog(this.player2, this.player1, damageCount);
            }

            player.hp.current -= damageCount;
            this.renderHP(player);
        }
    };

    setupHitButtons = (attacks1, attacks2) => {
        const controlBar = document.querySelector('.control');

        attacks1.forEach(attack => {

            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button');
            buttonElement.innerText = attack.name;
            const strikeOut = this.makeAction(attack, buttonElement, attacks2);

            buttonElement.addEventListener('click', () => {
                console.log('click');
                strikeOut();
            })
            controlBar.appendChild(buttonElement);
        });
    };

    generateHitLog = (firstPerson, secondPerson, damage) => {
        const logs = [
            `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
            `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.total}]`
        ];
        return logs[random(logs.length - 1)];
    }

    makeHItLog = (target, person, damage) => {
        const consoleBar = document.getElementById('logs');
        const consoleLog = document.createElement('p');
        consoleLog.innerText = this.generateHitLog(target, person, damage);
        consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
    }

    disableALlActions = () => {
        const actions = document.querySelector('.control').querySelectorAll('button');
        actions.forEach(action => {
            action.remove();

        })
    };

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

    addCharacter = () => {

        // const pokemons = await this.getPokemons();

        // let character = this.generateRandomPokemon(pokemons);


        // this.player1 = new Pokemon({
        //     ...character,
        //     selectors: 'player1'
        // })
        // this.attacks1 = this.player1.attacks;
    }

    addEnemy = () => {

        // const pokemons = await this.getPokemons();

        // let enemy = this.generateRandomPokemon(pokemons);
        //
        // this.player2 = new Pokemon({
        //     ...enemy,
        //     selectors: 'player2'
        // })
        // // console.log(this.player2);
        //
        // this.attacks2 = this.player2.attacks[0];
        // console.log(this.attacks2);

    }

    getPokemons = async () => {
        this.backResponse = new Backend();
        // console.log(this.backResponse)
        this.test = await this.backResponse.getPokemons();
        // console.log(this.test);
        // this.addEnemy();
        // this.addCharacter();
        //
        // this.createConsole();
        //
        // this.resetGame();
    };


    startGame = async () => {

        await this.getPokemons();
        console.log(this.test)
        // this.backResponse = new Backend();
        // // console.log(this.backResponse)
        // const test =  this.backResponse.getPokemons();
        // console.log(test);
        // this.addEnemy();
        // this.addCharacter();
        //
        // this.createConsole();
        //
        // this.resetGame();
    };

    resetGame = () => {
        console.log(this.player1)
        this.setupHitButtons(this.attacks1, this.attacks2);
        this.renderNames(this.player1, this.player2);
        this.renderHP(this.player1);
        this.renderHP(this.player2);
        this.renderAvatars(this.player1, this.player2);
    };

    changeEnemy = () => {
        this.addEnemy();
        this.resetGame();
    };

}

export {Game};
