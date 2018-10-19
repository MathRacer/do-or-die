import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD1myihk2tsdaYKEy7wXUwRNZpi55yXe7E",
    authDomain: "doordie-44f5e.firebaseapp.com",
    databaseURL: "https://doordie-44f5e.firebaseio.com",
    projectId: "doordie-44f5e",
    storageBucket: "",
    messagingSenderId: "998186596819"
  };
  
  firebase.initializeApp(config);

  const db = firebase.database()

  export default db