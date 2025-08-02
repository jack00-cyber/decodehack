
import { ref, remove } from 'firebase/database';
import { database } from './firebase';

const deleteData = async (path) => {
  try {
    await remove(ref(database, path));
    console.log(`Data deleted from ${path}`);
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export default deleteData;
