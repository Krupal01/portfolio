import { database } from "./FirebaseConfig";
import { ref, get } from 'firebase/database';

export const fetchBioData = async () => {
  try {
    const bioRef = ref(database, 'bio');
    const snapshot = await get(bioRef);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching bio data:", error.message);
    throw new Error(`Failed to fetch bio data. Please try again later. Additional error details: ${error.message}`);
  }
};