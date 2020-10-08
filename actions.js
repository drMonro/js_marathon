import {player1, player2} from "./main.js"

class Actions {
    constructor({attacks1, attacks2}) {
        this.attacks1 = attacks1;
        this.attacks2 = attacks2[0];
        this.setupHitButtons(this.attacks1, this.attacks2);
        this.createConsole();
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

    random = (num) => Math.ceil(Math.random() * num);

    makeActionLog(counter, action) {
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

    renderActionLimits = (button, action, counter) => {
        button.innerText = `${action.name} (${action.maxCount - counter})`;
    };

    makeAction = (action, button, action2) => {
        let actionCounter = 0;
        let This = this;
        This.renderActionLimits(button, action, actionCounter);

        return function () {
            if (actionCounter < action.maxCount) {
                console.log(action.damageMultiplier);
                player2.getDamage(This.random(action.damageMultiplier));
                player1.getDamage(This.random(action2.damageMultiplier));
                ++actionCounter;
                This.makeActionLog(actionCounter, action);
                This.renderActionLimits(button, action, actionCounter);
            } else {
                button.disabled = true;
                // This.makeActionLog(actionCounter, action);
            }
        }
    };

    createConsole = () => {
        const consoleBlock = document.createElement('div');
        const playGround = document.querySelector('html');
        playGround.appendChild(consoleBlock).setAttribute('id', 'logs');
    };

}

export default Actions;
