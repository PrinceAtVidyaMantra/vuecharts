// Conveniently import this file anywhere to use db

import "firebase/firestore";

///////

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCaz1DYdEZm0mf7nwkc2GLOWWpnFEvZHV8",
  authDomain: "reports-4888c.firebaseapp.com",
  databaseURL: "https://reports-4888c-default-rtdb.firebaseio.com",
  projectId: "reports-4888c",
  storageBucket: "reports-4888c.appspot.com",
  messagingSenderId: "673586183237",
  appId: "1:673586183237:web:5b26c4ae640d5e705c772c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
console.log(db)
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
getCities(db)

export default app

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
