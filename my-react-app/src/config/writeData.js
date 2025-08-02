// writeData.js
import { ref, push } from 'firebase/database';
import { database } from './firebase';

const writeData = async (path, data) => {
  try {
    await push(ref(database, path), data);
    console.log(`Data written to ${path}`);
  } catch (error) {
    console.error('Error writing data:', error);
    throw error;
  }
};

export default writeData;