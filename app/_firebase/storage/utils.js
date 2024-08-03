
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../config"; 



export async function uploadImage(imageDataUrl) {
  const storageRef = ref(storage, `pantry_images/${Date.now()}.jpg`);
  await uploadString(storageRef, imageDataUrl, 'data_url');
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}