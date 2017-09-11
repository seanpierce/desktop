var folder = function(name, type) {

let html =
`
<div class="folder ${type}__true" data-folder="${name}">
  <img src="assets/folder-${type}.png" alt="">
  <figcaption>
    ${name}
  </figcaption>
</div>
`
return html;

};

$(function() {
  // render all desktop items
  for(var i=0; i < ITEMS.length; i++) {
    let name = ITEMS[i].name;
    let type = ITEMS[i].type;
    $('body').append(folder(name, type));
  }

  // make folders draggable
  $('.folder').draggable({
    // during drag
    drag: function() {
      // remove selected status from all folders
      $('.folder').removeClass('selected');
      // add selected class
      $(this).addClass('selected');
    }
  });

  // highlight selected folder on click
  $('.folder').click(function() {
    // remove selected status from all folders
    $('.folder').removeClass('selected');
    // apply selected status only to clicked folder
    $(this).toggleClass('selected');
  });

  // remove selected status from all folders
  //  when user clicks desktop
  $('#background-div').click(function() {
    $('.folder').removeClass('selected');
  });
});
