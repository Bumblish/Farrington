

var data;
$(document).ready(function() {

	$("#getFruit").click(function() {
    loadImages();
  });
  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
  function loadImages() {
    var searchString = "fruit" + $("#fruitInput").val();
    $.getJSON( flickerAPI, {
      tags: searchString,
      tagmode: "any",
      format: "json"
    })
      .done(function( data ) {
        $("#flickrOutput").html(" ");
        $.each( data.items, function( i, item ) {
          $( "#flickrOutput" ).attr( "src", item.media.m );

        
        });
      });
    };
});