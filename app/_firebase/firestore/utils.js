import { db } from '../config';
import { addDoc, updateDoc, deleteDoc, collection, getDocs, query, where, doc } from 'firebase/firestore';

const COLLECTION_NAME = 'pantryItems';


// export const addPantryItem = async (item) => {
//     try {
//         const docRef = await addDoc(collection(db, COLLECTION_NAME), item);
//         return docRef.id;
//     } catch (error) {
//         console.error('Error adding document: ', error);
//     }
// }
export const addPantryItem = async (item) => {
    console.log("Attempting to add item:", item);
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), item);
        console.log("Item added successfully with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}


export const updatePantryItem = async (id, updates) => {
    try {
        const itemRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(itemRef, updates);
        console.log("Document successfully updated");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export const deletePantryItem = async (id) => {
    try {
        const itemRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(itemRef);
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
}


// const items = [];
// querySnapshot.forEach((doc) => {
//     items.push({ id: doc.id, ...doc.data() });
// });
// return items;
export const getPantryItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting documents: ', error);
    }
}

export const getExpiringItems = async () => {
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

    try {
        const q = query(collection(db, COLLECTION_NAME), where("expirationDate", "<=", sevenDaysFromNow.toISOString().split('T')[0]));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting expiring items: ", error);
    }
}