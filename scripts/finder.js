let directory_double_click = function(input) {
  $(`.${input}`).dblclick(function() {
    let clicked_folder = $(this).attr('data-folder');
    // open new finder window on page
    $('body').append(finder(clicked_folder));
  });
}
