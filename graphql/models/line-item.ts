import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore';

export interface LineItem {
  _id: string;
  title: string;
  description: string;
  isSavings: boolean;
  category: string;
  amount: number;
  date: Date;
}

export const lineItemConverter: FirestoreDataConverter<LineItem> = {
  // TODO: find a better way to pass default values

  toFirestore: (lineItem: LineItem): DocumentData => {
    return {
      //   _id: lineItem.id,
      title: lineItem.title,
      description: lineItem.description,
      isSavings: lineItem.isSavings ?? false,
      category: lineItem.category ?? '',
      amount: lineItem.amount ?? 0,
      date: lineItem.date,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>) => {
    const data = snapshot.data();

    return {
      _id: data.id,
      title: data.title,
      description: data.description,
      isSavings: data.isSavings,
      category: data.category,
      amount: data.amount,
      date: data.date,
    } as LineItem;
  },
};
