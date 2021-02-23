import { fireStore } from '../index';
import { lineItemConverter, LineItem } from './../models/line-item';
// import { LineItem } from '../models/line-item';

const COLLECTION = 'line-items';

export const getAsync = async (): Promise<any> => {
  try {
    const snapshot = await fireStore
      .collection(COLLECTION)
      .withConverter(lineItemConverter)
      .get();
    const lineItems = snapshot.docs.map((doc) => doc.data());

    return lineItems;
  } catch (err) {
    console.error(err);
  }
};

export const createAsync = async (lineItem: LineItem): Promise<string> => {
  const newLineItem = await fireStore
    .collection(COLLECTION)
    .withConverter(lineItemConverter)
    .add(lineItem);

  return newLineItem.id;
};
