import { loadPokemon } from "./pokemonResolvers";

const QueryType = {
  me: loadPokemon,
};

export const resolvers = {
  Query: QueryType,
};
