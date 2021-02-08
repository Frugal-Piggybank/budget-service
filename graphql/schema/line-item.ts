import { gql } from 'apollo-server-azure-functions';

export const typeDef = gql`
  type LineItem {
    _id: ID!
    title: String!
    description: String
    amount: Float
    isSavings: Boolean
    date: Date!
  }
  input UpsertLineItemInput {
    _id: ID
    title: String!
    category: ID
    description: String
    amount: Float
    isSavings: Boolean
    date: Date!
  }
  extend type Mutation {
    createLineItem: Boolean
    upsertLineItem(lineItem: UpsertLineItemInput!): LineItem!
    deleteLineItem(id: ID!): Boolean
  }
  extend type Query {
    lineItems: [LineItem!]!
    lineItem(id: ID!): LineItem!
    lineItemsByDate(day: Int, month: Int, year: Int): [LineItem!]!
  }
`;
