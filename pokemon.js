import {actions} from "./main.js"
import {player1, player2} from "./main.js"

class Selectors {
    constructor(name) {
        this.elHPLabel = document.getElementById(`health-${name}`);
        this.elHPBar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, selectors}) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };

        this.renderHP();
    }

    renderHP = () => {
        this.renderHPLabel();
        this.renderHPBar();
    };

    renderHPLabel = () => {
        this.elHPLabel.innerText = this.hp.current + '/' + this.hp.total;
    };

    renderHPBar = () => {
        this.elHPBar.style.width = (this.hp.current * 100) / this.hp.total + '%';
    };

    disableALlButtons = (buttons) => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].elButton.disabled = true;
        }
    };

    getDamage = (count) => {
        const damageCount = Math.ceil((this.hp.total / 100) * count);

        this.hp.current -= damageCount;

        if (count > (this.hp.current * 100) / this.hp.total) {
            this.hp.current = 0;
            this.disableALlButtons(actions)
        }

        if (this.name === player1.name) {
            this.makeHItLog(player1, player2, damageCount);
        } else {
            this.makeHItLog(player2, player1, damageCount);
        }

        this.renderHP();
    };

    makeHItLog = (target, person, damage) => {
        const consoleBar = document.getElementById('logs');
        const consoleLog = document.createElement('p');
        consoleLog.innerText = this.generateHitLog(target, person, damage);
        consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
    }

    random = (num) => Math.ceil(Math.random() * num);



    generateHitLog = (firstPerson, secondPerson, damage) => {
        const logs = [
            `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`, // -12, [88/100]
            `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`,
            `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.hp.current}/${firstPerson.hp.current}]`
        ];
        return logs[this.random(logs.length - 1)];
    }
}

export default Pokemon;
