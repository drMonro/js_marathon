class Backend {
    getPokemons = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        return await response.json();
    }

    getPokemon = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        return await response.json();
    }

    getDamage = async (idPlayer1, idPlayer2, idAttack) => {
        const response = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${idPlayer1}&attackId=${idAttack}&player2id=${idPlayer2}`);
        return await response.json();
    }
}

export {Backend};
