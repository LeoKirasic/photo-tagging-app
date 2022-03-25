import { app, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import uniqid from 'uniqid';

async function onSubmit(data) {
  await setDoc(doc(db, 'leaderboards', uniqid()), data);
}

export default onSubmit;
