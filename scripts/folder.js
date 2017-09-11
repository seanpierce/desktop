var folder = function(name, type) {

let html =
`
<div class="folder" data-folder="${name}">
  <img src="assets/folder-${type}.png" alt="">
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
    let type = ITEMS[i].type;
    $('body').append(folder(name, type));
  }
});
