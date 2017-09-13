// ------------------------------------ item crud functionality here
// ------------------------------------ item crud functionality here
// ------------------------------------ item crud functionality here

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
  parent.empty();
  items.forEach(function(item) {
    parent.append(
      `
      <li>${item.val().name}, ${item.val().type}, ${item.val().location}</li>
      `
    );
  });
}

let list_all_available_directories = function(parent, items) {
  parent.empty();
  items.forEach(function(item) {
    if (item.val().type === 'directory') {
      parent.append(
        `
        <option value="${item.val().name}">${item.val().name}</option>
        `
      );
    }
  });
}

// -------------------------------------- Initialize Firebase
// -------------------------------------- Initialize Firebase
// -------------------------------------- Initialize Firebase

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

  // database query
  ref.on("value", function(snapshot) {

    // list all items to admin page
    list_all_items($('#item-list'), snapshot);

    // append directories to new-item form
    list_all_available_directories($('#location-input'), snapshot);

  }, function (error) {
    console.log("Error: " + error.code);
  });

});
