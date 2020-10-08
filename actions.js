import {player1, player2} from "./main.js"

class Actions {
    constructor({attacks}) {
        this.attacks = attacks;
        this.setupHitButtons(this.attacks);
        this.createConsole();
    };

    setupHitButtons = (attacks) => {
        const controlBar = document.querySelector('.control');

        attacks.forEach(attack => {
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button');
            buttonElement.innerText = attack.name;
            const strikeOut = this.makeAction(attack, buttonElement);

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

    makeAction = (action, button) => {
        let actionCounter = 0;
        let This = this;
        This.renderActionLimits(button, action, actionCounter);

        return function () {
            if (actionCounter < action.maxCount) {
                console.log('Kick');
                player1.getDamage(This.random(action.damageMultiplier));
                player2.getDamage(This.random(action.damageMultiplier));
                ++actionCounter;
                This.makeActionLog(actionCounter, action);
                This.renderActionLimits(button, action, actionCounter);
            } else {
                button.disabled = true;
                This.makeActionLog(actionCounter, action);
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
