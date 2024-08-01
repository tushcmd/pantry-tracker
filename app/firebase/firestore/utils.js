import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

const COLLECTION_NAME = 'pantryItems';


export const addPantryItem = async (item) => {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), item);
    return docRef.id;
}