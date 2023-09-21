import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyDdoPdexV65ZJNavIr2Mh7L8R7QRHNg7HE',
  authDomain: 'drag-and-drop-image-gall-2f716.firebaseapp.com',
  projectId: 'drag-and-drop-image-gall-2f716',
  storageBucket: 'drag-and-drop-image-gall-2f716.appspot.com',
  messagingSenderId: '167667830408',
  appId: '1:167667830408:web:977b183f1a0574fe97993d',
  measurementId: "G-NRQYR1WCN7",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;