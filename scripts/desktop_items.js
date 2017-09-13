let desktop_item = function(item) {
  let file_img;
  if (item.type === 'image') {
    file_img = `<img src="assets/items/images/${item.name}" alt="${item.name}">`
  } else {
    file_img = `<img src="assets/folder-${item.type}.png" alt="">`
  }
  let html =
  `
  <div class="desktop_item ${item.type}__true" data-folder="${item.name}">
    ${file_img}
    <figcaption>
      ${item.name}
    </figcaption>
  </div>
  `
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
