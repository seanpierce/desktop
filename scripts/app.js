$(function() {

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
