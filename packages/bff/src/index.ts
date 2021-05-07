import path from 'path';
import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

import {resolvers} from './resolvers';

const schema = loadSchemaSync(
  path.join(__dirname, '../schema.graphql'),
  { loaders: [ new GraphQLFileLoader() ] }
);

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers,
  mocks: true,
  mockEntireSchema: false
});

// The `listen` method launches a web server.
server.listen(8000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
