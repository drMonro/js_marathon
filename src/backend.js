import Pokemon from "./pokemon";

class Backend {


    getPokemons = async () => {

        // const pokemons = await this.getPokemons();

        const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        const body = await responce.json();
        // console.log(body)
        return body;
    }
}


// export {Backend};
export default Backend;
