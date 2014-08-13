//= require jquery
//= require jquery_ujs
//= require_tree .

var taskLists =jQuery('.task-list button');

taskLists.on('click', function(){
  var button = $(this);
  var ul = button.parents('.task-list').find('ul');
  ul.toggle();
});

$("button").click(function() {
  $(this).html('Close');

  $('button').mouseover(function () {
    $(this).fadeTo('fast', 1);
  });

  $('.errors').clearTimeout(5000);


});

