import { gql } from 'apollo-server-azure-functions';
import { typeDef as LineItem } from './line-item';

const typeDef = gql`
  scalar Date
  type Query {
    _empty: String
  }
  type Mutation {
    deleteUser: Boolean
  }
`;

export default [typeDef, LineItem];
