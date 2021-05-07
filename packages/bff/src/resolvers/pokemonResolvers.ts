import * as PokemonLoader from '../loaders/pokemonLoader';

export const loadPokemon = async (id: number, name?: string) => {
    return PokemonLoader.load(id, name).then((response) => response);
};
