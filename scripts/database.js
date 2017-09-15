// --------------------------------------- Initialize Firebase
// --------------------------------------- Initialize Firebase
// --------------------------------------- Initialize Firebase

var config = {
  apiKey: "AIzaSyA1rZj4IMcLTlfAkpQq9dfoBVF5e8zYolM",
  authDomain: "simulated-desktop.firebaseapp.com",
  databaseURL: "https://simulated-desktop.firebaseio.com",
  projectId: "simulated-desktop",
  storageBucket: "simulated-desktop.appspot.com",
  messagingSenderId: "643543693366"
};
firebase.initializeApp(config);

// database query
let ref = firebase.database().ref("items/");

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location = 'index.html'; //If User is not logged in, redirect to login page
  }
});
