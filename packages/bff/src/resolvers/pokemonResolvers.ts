import * as PokemonLoader from '../loaders/pokemonLoader';

export const loadPokemon = async () => { 
    return PokemonLoader.load().then((response) => response);
};
