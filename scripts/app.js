$(function() {

  // make folders draggable
  $('.folder').draggable({
    // during drag
    drag: function() {
      // set z-index greater than all others
      $(this).css('z-index', 10);
      // remove selected status from all folders
      $('.folder').removeClass('selected');
      // add selected class
      $(this).addClass('selected');
    },
    // after stopping drag
    stop: function() {
      // reset it to default (1)
      $(this).css('z-index', 1);
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
