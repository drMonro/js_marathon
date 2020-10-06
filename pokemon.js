// import Actions from "./actions.js";
import {actions} from "./main.js"


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
            this.hp.current  = 0;
            this.disableALlButtons(actions)
        }

        // if (this.name === character.name) {
        //     makeHItLog(character, enemy, damageCount);
        // } else {
        //     makeHItLog(enemy, character, damageCount);
        // }

        this.renderHP();
    };
}

export default Pokemon;
