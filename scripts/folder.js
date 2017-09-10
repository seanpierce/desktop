var folder = function(name) {

let html =
`
<div class="folder" data-folder="${name}">
  <img src="assets/folder.png" alt="">
  <figcaption>
    ${name}
  </figcaption>
</div>
`
return html;

};

$(function() {
  for(var i=0; i < ITEMS.length; i++) {
    let name = ITEMS[i].name;
    $('body').append(folder(name));
  }
});
