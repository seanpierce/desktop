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
    <div class="finder__top-bar--main-content--left-col"></div>
    <div class="finder__top-bar--main-content--main-col">
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
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

  });

});
