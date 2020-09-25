const character = {
    name: 'Pikachu',
    defaultHP: 100,
    HP: 100,
    elHPLabel: document.getElementById('health-character'),
    elHPBar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    HP: 100,
    elHPLabel: document.getElementById('health-enemy'),
    elHPBar: document.getElementById('progressbar-enemy'),
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
    renderHPLife(person);
    renderProgressBar(person);
}

function renderHPLife(person) {
    person.elHPLabel.innerText = person.HP + '/' + person.defaultHP;
}

function renderProgressBar(person) {
    person.elHPBar.style.width = person.HP + '%';
}

function changeHP(count, person) {
    if (count > person.HP) {
        person.HP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        disableALlButtons(actions);
    } else {
        person.HP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function setupHitButtons(settings) {
    for (let i = 0; i < settings.length; i++) {
        settings[i].elButton.addEventListener('click', function () {
            console.log('Kick');
            changeHP(random(settings[i].damageMultiplier), character);
            changeHP(random(settings[i].damageMultiplier), enemy);
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
