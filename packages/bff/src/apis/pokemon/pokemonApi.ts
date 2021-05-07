import axios from "axios";
import { PokemonModel } from "./models/pokemonModel";

export async function getPokemon(id: number, name?: string) : Promise<PokemonModel> {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name ? name : id }/`)
            .then((res) => res.data);
  }
  