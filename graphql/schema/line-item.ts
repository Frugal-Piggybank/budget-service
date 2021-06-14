import { gql } from "apollo-server-azure-functions";

export const typeDef = gql`
  type LineItem {
    id: ID!
    title: String!
    # category: Category
    description: String
    amount: Float
    isSavings: Boolean
    date: Date!
  }

  input UpsertLineItemInput {
    id: ID
    title: String!
    category: ID
    description: String
    amount: Float
    isSavings: Boolean
    date: Date!
  }

  extend type Mutation {
    upsertLineItem(lineItem: UpsertLineItemInput!): String!
    deleteLineItem(id: ID!): Boolean
  }

  extend type Query {
    lineItems: [LineItem!]!
    lineItem(id: ID!): LineItem!
    lineItemsByDate(day: Int, month: Int, year: Int): [LineItem!]!
  }
`;
