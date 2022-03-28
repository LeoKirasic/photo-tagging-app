import { app, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function getLeaderboard() {
  const colRef = collection(db, 'leaderboards');
  let leaderboard = [];

  getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      leaderboard.push({ ...doc.data(), id: doc.id });
    });
  });
  return leaderboard;
}

export default getLeaderboard;
