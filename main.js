const character = {
    name: 'Pikachu',
    defaultHP: 150,
    HP: 150,
    elHPLabel: document.getElementById('health-character'),
    elHPBar: document.getElementById('progressbar-character'),
    getDamage,
    renderHP,
    renderHPLabel,
    renderHPBar

}

const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    HP: 150,
    elHPLabel: document.getElementById('health-enemy'),
    elHPBar: document.getElementById('progressbar-enemy'),
    getDamage,
    renderHP,
    renderHPLabel,
    renderHPBar
}

const actions = [
    {
        name: 'Thunder Jolt',
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
        counter: 0,
        // increaseCounter,
        makeActionLog,
        limit: 7
    },
    {
        name: 'Fireball',
        elButton: document.getElementById('btn-kick-spec'),
        damageMultiplier: 30,
        counter: 0,
        // increaseCounter,
        makeActionLog,
        limit: 3
    }
]


function renderHP() {
    this.renderHPLabel();
    this.renderHPBar();
}

function renderHPLabel() {
    this.elHPLabel.innerText = this.HP + '/' + this.defaultHP;
}

function renderHPBar() {
    this.elHPBar.style.width = (this.HP * 100) / this.defaultHP + '%';
}

const random = (num) => Math.ceil(Math.random() * num);

// function increaseCounter() {
//     let actionCounter = this.counter;
//     return function () {
//         return ++actionCounter
//     }
// }

function makeActionLog() {
    const consoleBar = document.getElementById('logs');
    const consoleLog = document.createElement('p');
    if (this.counter <= this.limit) {
        consoleLog.innerText = `Колличество применений навыка "${this.name}" : ${this.counter}. Осталось: ${this.limit - this.counter}`;
        consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
    } else {
        consoleLog.innerText = `Больше нельзя применить этот навык`;
        consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
    }
}

const renderActionLimits = (button) => {
    button.elButton.innerText = `${button.name} (${button.limit - button.counter})`;
};

function setupHitButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {

        // const actionCount = buttons[i].increaseCounter();
        renderActionLimits(buttons[i]);

        buttons[i].elButton.addEventListener('click', function () {
            console.log('Kick');
            console.log(`Counter call`);
            // buttons[i].counter = actionCount();
            buttons[i].counter += 1;

            if (buttons[i].counter <= buttons[i].limit) {
                character.getDamage(random(buttons[i].damageMultiplier));
                enemy.getDamage(random(buttons[i].damageMultiplier));
                renderActionLimits(buttons[i]);
                buttons[i].makeActionLog();
            } else {
                buttons[i].elButton.disabled = true;
                buttons[i].makeActionLog();
            }
        });
    }
}

const disableALlButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.disabled = true;
    }
};

function generateHitLog(firstPerson, secondPerson, damage) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`, // -12, [88/100]
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.HP}/${firstPerson.defaultHP}]`
    ];
    return logs[random(logs.length - 1)];
}


function makeHItLog(target, person, damage) {
    const consoleBar = document.getElementById('logs');
    const consoleLog = document.createElement('p');
    consoleLog.innerText = generateHitLog(target, person, damage);
    consoleBar.insertBefore(consoleLog, consoleBar.children[0]);
}

function getDamage(count) {
    const damageCount = Math.ceil((this.defaultHP / 100) * count);

    this.HP -= damageCount;

    console.log('HP ' + this.name + this.HP);
    console.log('Earned damage: ' + Math.ceil((this.defaultHP / 100) * count));

    if (count > (this.HP * 100) / this.defaultHP) {
        this.HP = 0;

        if (this.name === character.name) {
            console.log(`${enemy.name} make last kick (${damageCount}) to ${character.name}`);
        } else {
            console.log(`${character.name} make last kick (${damageCount}) to ${enemy.name}`);
        }

        console.log('Бедный ' + this.name + ' проиграл бой!');
        disableALlButtons(actions);
    }

    if (this.name === character.name) {
        makeHItLog(character, enemy, damageCount);
    } else {
        makeHItLog(enemy, character, damageCount);
    }

    this.renderHP();
}

function createConsole() {
    const consoleBlock = document.createElement('div');
    const playGround = document.querySelector('html');
    playGround.appendChild(consoleBlock).setAttribute('id', 'logs');
}


function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
    setupHitButtons(actions);
    createConsole();
}


init();
