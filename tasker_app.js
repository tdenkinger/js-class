$(function(){


  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var $ul = $("#tasks ul");
    var $text_box = $('input#task_text');
    var $li = get_formatted_text( $text_box.val() );

    $ul.prepend($li);
    $text_box.val(null);
  });

  function get_formatted_text(task_text){
    return $("<li>" + task_text + "</li>");
  };
});

