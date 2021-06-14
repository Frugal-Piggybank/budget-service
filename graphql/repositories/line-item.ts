import { QuerySnapshot } from "@google-cloud/firestore";
import { firestore } from "../index";
import { firestoreConverter, LineItemDocument } from "../models/LineItem";

const DB_COLLECTION = "line-items";

const getLineItemsCollection = () =>
  firestore.collection(DB_COLLECTION).withConverter(firestoreConverter);

const mapSnapshot = (snapshot: QuerySnapshot<LineItemDocument>) => {
  return snapshot.docs.map((doc) => doc.data());
};

export const getAsync = async (): Promise<LineItemDocument[]> => {
  try {
    const snapshot = await getLineItemsCollection().get();

    const lineItems = mapSnapshot(snapshot);

    return lineItems;
  } catch (err) {
    console.error(err);
  }
};

export const getByIdAsync = async (id: string): Promise<LineItemDocument> => {
  try {
    const snapshot = await getLineItemsCollection().doc(id).get();

    const lineItem = snapshot.data();

    return lineItem;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAsync = async (id: string): Promise<void> => {
  try {
    const lineItemDocument = getLineItemsCollection().doc(id);

    await lineItemDocument.delete();
  } catch (error) {
    console.error(error);
  }
};

const _updateLineItemAsync = async (
  lineItem: LineItemDocument
): Promise<string> => {
  try {
    const lineItemDocument = getLineItemsCollection().doc(lineItem.id);

    await lineItemDocument.update(lineItem);

    return "Succesfully updated";
  } catch (error) {
    console.error(error);
  }
};

const _createLineItemAsync = async (
  lineItem: LineItemDocument
): Promise<string> => {
  try {
    const lineItemDocument = await getLineItemsCollection().add(lineItem);

    return lineItemDocument.id;
  } catch (error) {
    console.error(error);
  }
};

export const upsertAsync = async (
  lineItem: LineItemDocument
): Promise<string> =>
  lineItem.id ? _updateLineItemAsync(lineItem) : _createLineItemAsync(lineItem);
