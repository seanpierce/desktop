// item crud functionality here

let create_new_item = function(name, type, content, directories, ref) {
  let newItem = ref.push();
  newItem.set({
    name: name,
    type: type,
    content: content,
    directories: directories
  });
}

let list_all_items = function(parent, items) {
  console.log(items);
  parent.empty();
  parent.append(
    `
    <li>ok</li>
    `
  );
}

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

$(function() {

  // add new item
  $('#new-item').submit(function(e) {
    e.preventDefault();
    let name = $('#name-input').val();
    let type = $('#type-input').val();
    let content = $('#content-input').val();
    let directories = $('#directories-input').val();

    create_new_item(name, type, content, directories, ref);

    $("#new-item").trigger("reset");
  });

  // list all items to admin page
  let list = $('#item-list');
  ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      list_all_items(list, snapshot.val());
    console.log();
  }, function (error) {
    console.log("Error: " + error.code);
  });

});
