import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAHtYNhrAEI5GRiPHCFv8LuIOXT4AOlW8",
  authDomain: "survey-aac91.firebaseapp.com",
  projectId: "survey-aac91",
  storageBucket: "survey-aac91.appspot.com",
  messagingSenderId: "1027678484759",
  appId: "1:1027678484759:web:130d907a5b4c37623e5f52",
  measurementId: "G-5GCLWS7REL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const firestore = firebase.firestore();

export const addGuest = async (guestId, guestName, answer) => {
  return firestore.collection("guests").doc(guestId).set({
    name: guestName,
    answer: answer,
  });
};

export const getGuests = async () => {
  return firestore.collection("guests").get();
};

export const getSpecificGuest = async (guestId) => {
  return firestore.collection("guests").doc(guestId).get();
};

export const updateGuest = async (guestId, guestName, answer) => {
  return firestore.collection("guests").doc(guestId).update({
    name: guestName,
    answer: answer,
  });
};

export const removeGuest = async (guestId) => {
  return firestore.collection("guests").doc(guestId).delete();
};
