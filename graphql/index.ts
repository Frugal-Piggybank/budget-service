import { ApolloServer } from 'apollo-server-azure-functions';
import admin from 'firebase-admin';
import typeDefs from './schema';
import resolvers from './resolvers';

import config from './firebase-config';

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hellow world!',
//   },
// };

const adminConfig = JSON.stringify(config);

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(adminConfig)),
});

const server = new ApolloServer({ typeDefs, resolvers });
const fireStore = admin.firestore();

exports.run = server.createHandler();
export { fireStore };
