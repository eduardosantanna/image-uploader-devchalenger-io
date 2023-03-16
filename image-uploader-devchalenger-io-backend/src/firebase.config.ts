import * as firebase from 'firebase-admin';

export async function initializeFirebase() {
  const serviceAccount = JSON.parse(process.env.FIREBASE);
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_BUCKET_URL,
  });
}
