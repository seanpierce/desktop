// ------------------------------------ item crud functionality here
// ------------------------------------ item crud functionality here
// ------------------------------------ item crud functionality here

let create_new_item = function(name, type, location, content, ref) {
  let newItem = ref.push();
  newItem.set({
    name: name,
    type: type,
    location: location,
    content: content
  });
}

let list_all_items = function(parent, items) {
  parent.empty();
  parent.append(
    `
    <tr>
      <th>Actions</th>
      <th>Name</th>
      <th>Type</th>
      <th>Location</th>
    </tr>
    `
  );
  items.forEach(function(item) {
    parent.append(
      `
      <tr>
        <td>
          <span data-key="${item.key}" class="delete_item" title="Delete Item">X</span>
        </td>
        <td>${item.val().name}</td>
        <td>${item.val().type}</td>
        <td>${item.val().location}</td>
      </tr>
      `
    );
  });
}

let list_all_available_directories = function(parent, items) {
  parent.empty();
  parent.append(`<option value="desktop">Desktop</option>`);
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

let functionality_for_deletable_items = function(items) {
  // delete item
  // can only be applied after items are printed
  $('.delete_item').click(function() {
    let key = $(this).attr('data-key');
    if (confirm('Are you sure you want to delete this item?')) {
      delete_item(ref, key);
    }
  });
}

let delete_item = function(ref, key) {
  ref.child(key).remove();
}

// --------------------------- document ready
// --------------------------- document ready
// --------------------------- document ready

$(function() {
  // add new item
  $('#new-item').submit(function(e) {
    e.preventDefault();
    let name = $('#name-input').val();
    let type = $('#type-input').val();
    let content = $('#content-input').val();
    let location = $('#location-input').val();

    create_new_item(name, type, location, content, ref);

    $("#new-item").trigger("reset");
  });
  // database query
  ref.on("value", function(snapshot) {
    // list all items to admin page
    list_all_items($('#item-list'), snapshot);
    // append directories to new-item form
    list_all_available_directories($('#location-input'), snapshot);
    functionality_for_deletable_items(snapshot);
  }, function (error) {
    console.log("Error: " + error.code);
  });
});
