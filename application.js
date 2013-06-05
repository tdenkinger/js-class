$(function (){
  $("div.article").tableOfContents($('h1'));
});

$.fn.tableOfContents = function(header){
  var back_to_top = "<a href='#top'>Back To Top</a>";
  this.append(back_to_top);

  var toc_header = $("<h2 id='toc'><a name='toc'>Table of Contents</a></h2>");
  header.after(toc_header);

  var ul = $("<ul id='toc'></ul>");
  toc_header.after(ul);


  this.find('h2').each( function(){
    var title = $(this).text();
    var slug = title.trim().toLowerCase().replace(" ", "_");
    var list_item = "<li><a href='#" + slug + "'>" + title + "</a></li>";
    var target_anchor = "<a name='" + slug + "'/>";

    $(this).prepend(target_anchor);
    ul.append(list_item);

    var toggle_link = $("<a href='#'>(hide)</a><br/>");
    toggle_link.on('click', function (event){
      event.preventDefault();
      $(this).siblings('p').toggle();
      var old_text = $(this).text();
      var new_text = (old_text == '(hide)') ? '(show)' : '(hide)';
      $(this).text(new_text);
    });
    $(this).after(toggle_link);
  });
};
