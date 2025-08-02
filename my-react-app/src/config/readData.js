// readData.js
import { ref, get, child } from 'firebase/database';
import { database } from './firebase';

const readData = async (path) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, path));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.warn('No data available at path:', path);
      return null;
    }
  } catch (error) {
    console.error('Error reading data:', error);
    throw error;
  }
};

export default readData;
