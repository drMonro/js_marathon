import {Game} from "./game.js";

class Main {
    constructor() {
        this.newGame = new Game();
    }

    init = async () => {
        await this.newGame.startGame();
    }
}

new Main().init();
