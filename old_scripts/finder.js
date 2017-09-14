let finder = function(folder) {
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
        sean_pierce/${folder}
      </div>
    </div>
    <div class="finder__top-bar--main-content">
      <div class="finder__top-bar--main-content--left-col">
        <ul>
          <li><strong>Desktop</strong></li>
          ${ ITEMS.map(item => `<li class="finder__root-li ${item.name === folder ? 'li-selected' : ''}" data-folder="${item.name}"><img src="assets/${item.type}-icon-gray.png">${item.name}</li>`).join('') }
        </ul>
      </div>
      <div class="finder__top-bar--main-content--main-col">
        <ul class="finder__directory-content">
          ${ ITEMS.map(item =>
            `${ item.name === folder
              ? `${item.content.directories.map(directory => `<li class="finder__sub-item-li"><img src="assets/directory-icon.png">${directory}<span class="finder__directory-triangle">&#9654;</span></li>`)
              .join('') }`
              : '' }`).join('') }
          ${ ITEMS.map(item =>
            `${ item.name === folder
              ? `${item.content.files.map(file => `<li class="finder__sub-item-li"><img src="assets/${file.type}-icon.png">${file.name}</li>`)
              .join('') }`
              : '' }`).join('') }
        </ul>
      </div>
    </div>
  </div>
  `;
  return thisFinder;
}

var updateContent = function(currentContent, newFolder) {
  currentContent.append(
    `
    ${ ITEMS.map(item =>
      `${ item.name === newFolder
        ? `${item.content.directories.map(directory => `<li class="finder__sub-item-li"><img src="assets/directory-icon.png">${directory}<span class="finder__directory-triangle">&#9654;</span></li>`)
        .join('') }`
        : '' }`).join('') }
    ${ ITEMS.map(item =>
      `${ item.name === newFolder
        ? `${item.content.files.map(file => `<li class="finder__sub-item-li"><img src="assets/${file.type}-icon.png">${file.name}</li>`)
        .join('') }`
        : '' }`).join('') }
    `
  );
  resetHighlight();
}

var resetHighlight = function() {
  // select toggle for sub-li
  $('.finder__sub-item-li').click(function() {
    // remove class fdeom all
    $('.finder__sub-item-li').removeClass('finder__sub-item-li-selected');
    // apply class to this
    $(this).addClass('finder__sub-item-li-selected');
  });
}


// ----------------------------- DOCUMENT READY?
// ----------------------------- DOCUMENT READY?
// ----------------------------- DOCUMENT READY?

$(function() {

  // create new finder window
  $('.desktop_item').dblclick(function() {
    let folder = $(this).attr('data-folder');
    // display new finder and let it be draggable
    $('body').append(finder(folder));
    $('.finder').draggable({
      // during drag
      drag: function() {
        // remove selected status from all others
        $('.finder').removeClass('finder-selected');
        // add finder-selected class
        $(this).addClass('finder-selected');
      }
    });

    // set finder as selected onclick
    $('.finder').click(function() {
      // remove selected status from all others
      $('.finder').removeClass('finder-selected');
      // add finder-selected class
      $(this).addClass('finder-selected');
    });

    // switch file view on root-li click
    $('.finder__root-li').click(function() {
      $('.finder__root-li').removeClass('li-selected');
      $(this).addClass('li-selected');
      let newFolder = $(this).attr('data-folder');
      let currentFinder = $(this).closest('.finder');
      let currentContent = (currentFinder.find('ul.finder__directory-content'));
      currentContent.empty();
      updateContent(currentContent, newFolder);
    });

    resetHighlight();

    // close this finder window
    $('.finder .finder__top-bar--controls .close').click(function() {
      let currentFinder = $(this).closest('.finder');
      currentFinder.remove();
    });

  });

});
