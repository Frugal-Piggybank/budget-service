import { ApolloServer } from 'apollo-server-azure-functions';
import admin, { ServiceAccount } from 'firebase-admin';
import typeDefs from './schema';
import resolvers from './resolvers';

const config: ServiceAccount = {
  projectId: process.env['FIREBASE_PROJECT_ID'],
  clientEmail: process.env['FIREBASE_CLIENT_EMAIL'],
  privateKey: process.env['FIREBASE_PRIVATE_KEY'],
};

admin.initializeApp({
  credential: admin.credential.cert(config),
});

const server = new ApolloServer({ typeDefs, resolvers });
const fireStore = admin.firestore();

exports.run = server.createHandler();
export { fireStore };
