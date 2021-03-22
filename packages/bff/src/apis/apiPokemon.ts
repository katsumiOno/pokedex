import axios from "axios";

export interface PokemonOfAPI {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
}

export async function getPokemon() : Promise<PokemonOfAPI> {
    return axios.get('https://pokeapi.co/api/v2/pokemon/1/')
            .then((res) => res.data);
  }
  