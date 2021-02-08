import { fireStore } from '../index';

const COLLECTION = 'line-items';

export const getAsync = async (): Promise<any> => {
  try {
    const snapshot = await fireStore.collection(COLLECTION).get();
    const lineItems = snapshot.docs.map((doc) => doc.data());

    return lineItems;
  } catch (err) {
    console.error(err);
  }
};

export const createAsync = async (): Promise<void> => {
  fireStore.collection(COLLECTION).add({
    title: 'Water',
    description: 'This is my water bill',
    amount: 23,
    isSavings: false,
    date: new Date(),
  });
};
