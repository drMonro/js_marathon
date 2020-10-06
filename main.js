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

// console.log(player1);

const actions = [
    {
        name: 'Thunder Jolt',
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
        // makeActionLog,
        limit: 7
    },
    {
        name: 'Fireball',
        elButton: document.getElementById('btn-kick-spec'),
        damageMultiplier: 30,
        // makeActionLog,
        limit: 3
    }
]

const adjustButtons = new Actions({actions})

export {player1, player2, actions};

// const random = (num) => Math.ceil(Math.random() * num);

// function makeActionLog(counter) {
//     const consoleBar = document.getElementById('logs');
//     const consoleLog = document.createElement('p');
//     if (counter < this.limit) {
//         consoleLog.innerText = `Колличество применений навыка "${this.name}" : ${counter}. Осталось: ${this.limit - counter}`;
//         consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
//     } else {
//         consoleLog.innerText = `Больше нельзя применить этот навык`;
//         consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
//     }
// }

// const renderActionLimits = (button, counter) => {
//     button.elButton.innerText = `${button.name} (${button.limit - counter})`;
// };

// function makeAction (action) {
//     let actionCounter = 0;
//     // renderActionLimits(action, actionCounter);
//
//     return function () {
//         if (actionCounter < action.limit) {
//             // character.getDamage(random(action.damageMultiplier));
//             player1.getDamage(random(action.damageMultiplier));
//             player2.getDamage(random(action.damageMultiplier));
//             ++actionCounter;
//             // action.makeActionLog(actionCounter);
//             // renderActionLimits(action, actionCounter);
//         } else {
//             action.elButton.disabled = true;
//             // action.makeActionLog(actionCounter);
//         }
//
//     }
// }

// function setupHitButtons(buttons) {
//     for (let i = 0; i < buttons.length; i++) {
//         const strikeOut = makeAction(buttons[i]);
//
//         buttons[i].elButton.addEventListener('click', function () {
//             console.log('Kick');
//             strikeOut();
//         });
//     }
// }

// const disableALlButtons = (buttons) => {
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].elButton.disabled = true;
//     }
// };

// function generateHitLog(firstPerson, secondPerson, damage) {
//     const logs = [
//         `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`, // -12, [88/100]
//         `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
//         `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`
//     ];
//     return logs[random(logs.length - 1)];
// }


// function makeHItLog(target, person, damage) {
//     const consoleBar = document.getElementById('logs');
//     const consoleLog = document.createElement('p');
//     consoleLog.innerText = generateHitLog(target, person, damage);
//     consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
// }
//
//
// function createConsole() {
//     const consoleBlock = document.createElement('div');
//     const playGround = document.querySelector('html');
//     playGround.appendChild(consoleBlock).setAttribute('id', 'logs');
// }


// function init() {
//     // console.log('Start Game!');
//     // character.renderHP();
//     // enemy.renderHP();
//     setupHitButtons(actions);
//     // createConsole();
// }


// init();

// export main
