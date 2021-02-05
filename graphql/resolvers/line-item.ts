import { IResolvers } from 'apollo-server-azure-functions';
import { getAsync } from '../repositories/line-item-repository';
// import {
//   getAsync,
//   getByIdAsync,
//   upsertAsync,
//   deleteAsync,
// } from "../../repositories/line-item-repository";

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
    lineItems: async (
      root: void,
      args: void
      //   ctx: ApolloContext
    ): Promise<any> => {
      const lineItems = await getAsync();

      return lineItems;
    },
    // lineItem: async (
    //   root: void,
    //   args: { id: string },
    //   ctx: ApolloContext
    // ): Promise<LineItemDocument> => {
    //   const userId = checkAuthentication(ctx);
    //   const lineItem = await getByIdAsync(args.id);
    //   if (!lineItem || lineItem.userId !== userId) ctx.res.status(404);
    //   return lineItem;
    // },
  },
  Mutation: {
    // upsertLineItem: async (
    //   root: void,
    //   args: { lineItem: LineItemDocument },
    //   ctx: ApolloContext
    // ): Promise<LineItemDocument> => {
    //   const userId = checkAuthentication(ctx);
    //   return await upsertAsync(userId, args.lineItem);
    // },
    // deleteLineItem: async (
    //   root: void,
    //   args: { id: string },
    //   ctx: ApolloContext
    // ): Promise<boolean> => {
    //   const userId = checkAuthentication(ctx);
    //   const result = await deleteAsync(userId, args.id);
    //   return result === 204;
    // },
  },
};
