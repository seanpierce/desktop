// Initialize Firebase
var config = {
  apiKey: "AIzaSyA1rZj4IMcLTlfAkpQq9dfoBVF5e8zYolM",
  authDomain: "simulated-desktop.firebaseapp.com",
  databaseURL: "https://simulated-desktop.firebaseio.com",
  projectId: "simulated-desktop",
  storageBucket: "simulated-desktop.appspot.com",
  messagingSenderId: "643543693366"
};
firebase.initializeApp(config);

let ref = firebase.database().ref("items/");

// create_new_item("1", "2", "3", "4", ref);

ref.on("value", function(snapshot) {
  snapshot.forEach(function(item) {
    // print desktop items to page
    $('body').append(desktop_item(item.val()));
    // make desktop items functional
    make_desktop_items_draggable();
  });
  console.log();
}, function (error) {
  console.log("Error: " + error.code);
});
