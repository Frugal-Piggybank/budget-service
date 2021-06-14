import { LineItemDocument } from "../models/LineItem";
import { IResolvers } from "apollo-server-azure-functions";
import {
  deleteAsync,
  getAsync,
  getByIdAsync,
  upsertAsync,
} from "../repositories/line-item";

export const resolvers: IResolvers = {
  Query: {
    // lineItemsByDate: async (
    //   root: void,
    //   args: LineItemFilters,
    //   ctx: ApolloContext
    // ): Promise<LineItemDocument[]> => {
    //   const userId = checkAuthentication(ctx);
    //   const lineItems = await getAsync(userId, args);
    //   return lineItems;
    // },
    lineItems: async (root: void, args: void): Promise<LineItemDocument[]> => {
      const lineItems = await getAsync();

      return lineItems;
    },
    lineItem: async (
      root: void,
      args: { id: string }
    ): Promise<LineItemDocument> => {
      const lineItem = await getByIdAsync(args.id);

      return lineItem;
    },
  },
  Mutation: {
    upsertLineItem: async (
      root: void,
      args: { lineItem: LineItemDocument }
    ): Promise<string> => upsertAsync(args.lineItem),
    deleteLineItem: async (root: void, args: { id: string }): Promise<void> => {
      await deleteAsync(args.id);
    },
  },
};
