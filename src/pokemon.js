class Selectors {
    constructor(name) {
        this.elHPLabel = document.getElementById(`health-${name}`);
        this.elHPBar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, selectors, attacks, img = []}) {
        super(selectors);
        this.name = name;
        this.img = img;
        this.selectors = selectors;
        this.hp = {
            current: hp,
            total: hp
        };
        this.attacks = attacks;
    }
}

export default Pokemon;
