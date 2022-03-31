import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function getCoordinates() {
  const colRef = collection(db, 'coordinates');
  let coordinates: Array<object> = [];

  getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      coordinates.push({ ...doc.data(), id: doc.id });
    });
  });
  return coordinates;
}

export default getCoordinates;
