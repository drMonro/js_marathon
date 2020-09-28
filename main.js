const character = {
    name: 'Pikachu',
    defaultHP: 150,
    HP: 150,
    elHPLabel: document.getElementById('health-character'),
    elHPBar: document.getElementById('progressbar-character'),
    makeHit: makeHit

}

const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    HP: 150,
    elHPLabel: document.getElementById('health-enemy'),
    elHPBar: document.getElementById('progressbar-enemy'),
    makeHit: makeHit
}

const actions = [
    {
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20
    },
    {
        elButton: document.getElementById('btn-kick-spec'),
        damageMultiplier: 30
    }
]


function renderHP(person) {
    renderHPLabel(person);
    renderHPBar(person);
}

function renderHPLabel(person) {
    person.elHPLabel.innerText = person.HP + '/' + person.defaultHP;
}

function renderHPBar(person) {
    person.elHPBar.style.width = (person.HP * 100) / person.defaultHP  + '%';
}

function makeHit(count) {
    if (count > (this.HP * 100) / this.defaultHP) {
        this.HP = 0;
        console.log(this.HP)
        renderHP(this);
        console.log('Last kick:' + count);

        alert('Бедный ' + this.name + ' проиграл бой!');
        disableALlButtons(actions);
    } else {
        console.log(count)
        this.HP -= Math.ceil((this.defaultHP / 100) * count);
        renderHP(this);

    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function setupHitButtons(settings) {
    for (let i = 0; i < settings.length; i++) {
        settings[i].elButton.addEventListener('click', function () {
            console.log('Kick');
            character.makeHit(random(settings[i].damageMultiplier))
            enemy.makeHit(random(settings[i].damageMultiplier))
        });
    }
}

function disableALlButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.disabled = true;
    }
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
    setupHitButtons(actions);
}


init();
