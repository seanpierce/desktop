let desktop_item = function(item) {
  let key = item.key;
  let this_item = item.val();
  // var declarations
  let file_img;
  let html;

  // set icon image
  if (this_item.type === 'image') {
    file_img = `<img src="assets/items/images/${this_item.name}" alt="${this_item.name}">`
  } else {
    file_img = `<img src="assets/folder-${this_item.type}.png" alt="">`
  }

  // only place item on desktop if it's location is desktop
  if (this_item.location === 'desktop') {
    html =
    `
    <div class="desktop_item ${this_item.type}__true" data-folder="${this_item.name}" data-key="${key}">
      ${file_img}
      <figcaption>
        ${this_item.name}
      </figcaption>
    </div>
    `
  }
  return html;
}

let make_desktop_items_draggable = function() {
  // make folders draggable
  $('.desktop_item').draggable({
    // during drag
    drag: function() {
      // remove selected status from all folders
      $('.desktop_item').removeClass('selected');
      // add selected class
      $(this).addClass('selected');
    }
  });
  // highlight selected folder on click
  $('.desktop_item').click(function() {
    // remove selected status from all desktop_items
    $('.desktop_item').removeClass('selected');
    // apply selected status only to clicked desktop_item
    $(this).toggleClass('selected');
  });
  // remove selected status from all desktop_items
  //  when user clicks desktop
  $('#background-div').click(function() {
    $('.desktop_item').removeClass('selected');
  });
}
