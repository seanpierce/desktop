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

ref.on("value", function(snapshot) {
  $('.desktop_item').remove();
  snapshot.forEach(function(item) {
    // erase all prev items
    // print desktop items to page
    $('body').append(desktop_item(item.val()));
  });
  // make desktop items functional
  make_desktop_items_draggable();
  // functionality for opening finders
  directory_double_click_open_finder('directory__true');
}, function (error) {
  console.log("Error: " + error.code);
});

$(function() {
});
