import {PokemonOfAPI} from '../apis/apiPokemon';

export class Pokemon {
  id: number;
  nome: string;

  constructor(pokemon: PokemonOfAPI) {
    this.id = pokemon.id;
    this.nome = pokemon.name;
  }
}
