import { PokemonModel } from '../apis/pokemon/models/pokemonModel';

export class Pokemon {
  id: number;
  nome: string;
  types: Array<String>;
  stats: Array<{
    name: string;
    baseStat: number;
  }>;

  constructor(pokemon: PokemonModel) {
    this.id = pokemon.id;
    this.nome = pokemon.name;
    this.types = pokemon.types.map(type => type.type.name);
    this.stats = pokemon.stats.map(stat => ({ baseStat: stat.base_stat, name: stat.stat.name }));
  }
}
