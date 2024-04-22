import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB8tOPquhDxV4QxsfaKgf1_M1vHhq04fXo',
  authDomain: 'learn-lingo-app-133.firebaseapp.com',
  projectId: 'learn-lingo-app-133',
  storageBucket: 'learn-lingo-app-133.appspot.com',
  messagingSenderId: '571798922891',
  appId: '1:571798922891:web:855cc22fd0e7dde4c5168e',
  measurementId: 'G-SYYN06V74D',
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
