
import { getPokemon } from "../apis/pokemon/pokemonApi";
import { Pokemon } from "../domain/pokemonDomain";

export const load = async (id: number, name?: string): Promise<Pokemon> =>
    getPokemon(id, name)
    .then(pokemon => new Pokemon(pokemon))
    .catch(() => Promise.reject(null));