import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";

export interface LineItemDocument {
  id: string;
  title: string;
  description: string;
  isSavings: boolean;
  category: string;
  amount: number;
  date: Date;
}

export interface CategoryDocument {
  id: string;
  name: string;
  created: Date;
  icon: string;
  isActive: boolean;
}

// export interface LineItemFilters {
//   [key: string]: string;
//   day: string;
//   month: string;
//   year: string;
// }

export const firestoreConverter: FirestoreDataConverter<LineItemDocument> = {
  toFirestore: (lineItem: LineItemDocument): DocumentData => lineItem,
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>) => {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      title: data.title,
      description: data.description,
      isSavings: data.isSavings,
      category: data.category,
      amount: data.amount,
      date: data.date,
    } as LineItemDocument;
  },
};
