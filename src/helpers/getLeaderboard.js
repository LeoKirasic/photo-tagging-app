import { app, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getLeaderboard() {
  const colRef = collection(db, 'leaderboards');
  let leaderboard = [];
  return new Promise((resolve, reject) => {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        leaderboard.push({ ...doc.data(), id: doc.id });
      });

      resolve(leaderboard);
    });
  });
}

export default getLeaderboard;
