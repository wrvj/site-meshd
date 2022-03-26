const { getFirestore } = require('firebase-admin/firestore');

interface iFormData {
  email: string;
  name: string;
  company: string;
  fileFormats: any;
  services: any;
  description: string;
  variations: string;
  reToken: string;
}


export async function saveNewFormData(data: iFormData) {
  const db = getFirestore();

  const res = await db.collection('Form Entries').add({
    ...data
  });

  return res.id;
}