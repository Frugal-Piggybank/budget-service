import { fireStore } from '../index';

export const getAsync = async (): Promise<any> => {
  try {
    const lineItems = fireStore.collection('line-items').get();

    return lineItems;
  } catch (err) {
    console.error(err);
  }
};
