import {player1, player2} from "./main.js"

class Actions {
    constructor({actions}) {
        this.actions = actions;
        this.setupHitButtons(this.actions);
        this.createConsole();
    };

    setupHitButtons = (actions) => {
        for (let i = 0; i < actions.length; i++) {
            const strikeOut = this.makeAction(actions[i]);

            actions[i].elButton.addEventListener('click', function () {
                strikeOut();
            });
        }
    };

    random = (num) => Math.ceil(Math.random() * num);

    makeActionLog(counter, action) {
        const consoleBar = document.getElementById('logs');
        const consoleLog = document.createElement('p');
        if (counter < action.limit) {
            consoleLog.innerText = `Колличество применений навыка "${action.name}" : ${counter}. Осталось: ${action.limit - counter}`;
            consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
        } else {
            consoleLog.innerText = `Больше нельзя применить этот навык`;
            consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
        }
    };

    renderActionLimits = (button, counter) => {
        button.elButton.innerText = `${button.name} (${button.limit - counter})`;
    };

    makeAction = (action) => {
        let actionCounter = 0;
        let This = this;
        This.renderActionLimits(action, actionCounter);

        return function () {
            if (actionCounter < action.limit) {
                console.log('Kick');
                player1.getDamage(This.random(action.damageMultiplier));
                player2.getDamage(This.random(action.damageMultiplier));
                ++actionCounter;
                This.makeActionLog(actionCounter, action);
                This.renderActionLimits(action, actionCounter);
            } else {
                action.elButton.disabled = true;
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
