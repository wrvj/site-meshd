
const { getFirestore } = require('firebase-admin/firestore');



export async function generateNewToken(email: string) {
  const db = getFirestore();

  const res = await db.collection('formEntriesTokens').add({
    email: email,
    timestamp: new Date().getTime()
  });

  return res.id;
}