import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getLeaderboard() {
  const colRef = collection(db, 'leaderboards');
  let leaderboard: Array<object> = [];
  return new Promise((resolve, reject) => {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        leaderboard.push({ ...doc.data(), id: doc.id });
      });
      leaderboard.sort((a, b) => (a as any).time - (b as any).time);
      resolve(leaderboard);
    });
  });
}

export default getLeaderboard;
