import { getPokemon } from '../apis/apiPokemon';
import { Pokemon } from "../domain/pokemonDomain";

export const load = async (): Promise<Pokemon> =>
    getPokemon()
    .then(pokemon => pokemon)
    .then(pokemon => new Pokemon(pokemon))
    .catch(() => Promise.reject(null));