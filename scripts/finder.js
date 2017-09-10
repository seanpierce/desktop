var finder = function(folder) {
  let thisFinder =
  `
  <div class="finder">
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
          ${ ITEMS.map(item => `<li class="${item.name === folder ? 'li-selected' : ''}"><img src="assets/directory-icon-gray.png">${item.name}</li>`).join('') }
        </ul>
      </div>
      <div class="finder__top-bar--main-content--main-col">
        <ul>
          ${ ITEMS.map(item =>
            `${ item.name === folder
              ? `${item.content.directories.map(directory => `<li><img src="assets/directory-icon.png">${directory}</li>`)
              .join('') }`
              : '' }`).join('') }
          ${ ITEMS.map(item =>
            `${ item.name === folder
              ? `${item.content.files.map(file => `<li><img src="assets/${file.type}-icon.png">${file.name}</li>`)
              .join('') }`
              : '' }`).join('') }
        </ul>
      </div>
    </div>
  </div>
  `;
  return thisFinder;
}



$(function() {

  // create new finder window
  $('.folder').dblclick(function() {
    let folder = $(this).attr('data-folder');
    // display new finder and let it be draggable
    $('body').append(finder(folder));
    $('.finder').draggable();

    // close this finder window
    $('.finder .finder__top-bar--controls .close').click(function() {
      let finderWindow = $(this).closest('.finder');
      finderWindow.remove();
    });

    // append names of items to finder left col


  });

});
