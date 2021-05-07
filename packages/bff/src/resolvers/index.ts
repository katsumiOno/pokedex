import { loadPokemon } from "./pokemonResolvers";

const QueryType = {
  pokemon(parent: null, args: {id: number, name?: string}) {
    return loadPokemon(args.id, args.name);
  }
};

export const resolvers = {
  Query: QueryType,
};
