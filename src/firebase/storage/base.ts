// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, updateMetadata } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApGKXdRs-_C2XnekVEQc6MzsSZCL_Mtoc",
  authDomain: "meshd-4c2df.firebaseapp.com",
  projectId: "meshd-4c2df",
  storageBucket: "meshd-4c2df.appspot.com",
  messagingSenderId: "551990513892",
  appId: "1:551990513892:web:99f5eedcdf14c5fc341cf1"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const storage = getStorage(firebaseApp);
export { ref, uploadBytes, updateMetadata, firebaseApp }
