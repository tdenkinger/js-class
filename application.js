$(function (){
  var back_to_top = "<a href='#top'>Back To Top</a>";
  $("div.article").append(back_to_top);

  var toc_header = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
  $("h1").after(toc_header);
  $("h2:first").after("<ul id='toc'></ul>");
  $("div.article h2").each( function(){
    var title = $(this).text();
    var list_item = "<li>" + title + "</li>";
    $("ul#toc").after(list_item);
  });
});

