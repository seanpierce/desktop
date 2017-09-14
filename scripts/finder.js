let finder = function(clicked_folder) {
  let thisFinder =
  `
  <div class="finder finder-selected">
    <div class="finder__top-bar">
      <div class="finder__top-bar--controls">
        <div class="finder__top-bar--control close"></div>
        <div class="finder__top-bar--control minimize"></div>
        <div class="finder__top-bar--control maximize"></div>
      </div>
      <div class="finder__top-bar--computer-name">
        <img src="assets/folder.png">
        sean_pierce/${clicked_folder}
      </div>
    </div>
    <div class="finder__top-bar--main-content">
      <div class="finder__top-bar--main-content--left-col">
        <ul>
          <li><strong>Desktop</strong></li>
          <li class="finder__root-li" data-finder="finder-${clicked_folder}"><img src="assets/directory-icon-gray.png">${clicked_folder}</li>
        </ul>
      </div>
      <div class="finder__top-bar--main-content--main-col">
        <ul class="finder__directory-content">
          <li class="finder__sub-item-li"><img src="assets/directory-icon.png">directory<span class="finder__directory-triangle">&#9654;</span></li>
          <li class="finder__sub-item-li"><img src="assets/text-icon-gray.png">text</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  return thisFinder;
}

let directory_double_click_open_finder = function(input, snapshot) {
  $(`.${input}`).dblclick(function() {
    let clicked_folder = $(this).attr('data-folder');
    // open new finder window on page
    $('body').append(finder(clicked_folder));
    // make finders draggable
    $('.finder').draggable({
      // during drag
      drag: function() {
        // remove selected status from all others
        $('.finder').removeClass('finder-selected');
        // add finder-selected class
        $(this).addClass('finder-selected');
      }
    });
    // close finder
    $('.finder .finder__top-bar--controls .close').click(function() {
      let currentFinder = $(this).closest('.finder');
      currentFinder.remove();
    });
  });
}
