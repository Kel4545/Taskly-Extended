//= require jquery
//= require jquery_ujs
//= require_tree .

var taskLists = jQuery('.task-list button');

taskLists.on('click', function () {
  var button = $(this);
  var ul = button.parents('.task-list').find('ul');
  ul.toggle();
});

$("button").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});

// $("button").mouseover(function () {
 // $(this).fadeTo('fast', 1);
// });


// $('.errors').clearTimeout(5000);

// });