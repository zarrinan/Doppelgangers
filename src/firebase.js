 import firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyDbOaxNP6AjQxASYEFGbuBlwFJF1-1lFiU",
    authDomain: "doppelgangers-67710.firebaseapp.com",
    databaseURL: "https://doppelgangers-67710.firebaseio.com",
    projectId: "doppelgangers-67710",
    storageBucket: "doppelgangers-67710.appspot.com",
    messagingSenderId: "584012129041"
  };
  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
