(function() {
  'use strict';

  const movies = [];

  const renderMovies = function() {
    $('#listings').empty();

    for (const movie of movies) {
      const $col = $('<div>').addClass('col s6');
      const $card = $('<div>').addClass('card hoverable');
      const $content = $('<div>').addClass('card-content center');
      const $title = $('<h6>').addClass('card-title truncate');

      $title.attr({
        'data-position': 'top',
        'data-tooltip': movie.title
      });

      $title.tooltip({ delay: 50 }).text(movie.title);

      const $poster = $('<img>').addClass('poster');

      $poster.attr({
        src: movie.poster,
        alt: `${movie.poster} Poster`
      });

      $content.append($title, $poster);
      $card.append($content);

      const $action = $('<div>').addClass('card-action center');
      const $plot = $('<a>');

      $plot.addClass('waves-effect waves-light btn modal-trigger');
      $plot.attr('href', `#${movie.id}`);
      $plot.text('Plot Synopsis');

      $action.append($plot);
      $card.append($action);

      const $modal = $('<div>').addClass('modal').attr('id', movie.id);
      const $modalContent = $('<div>').addClass('modal-content');
      const $modalHeader = $('<h4>').text(movie.title);
      const $movieYear = $('<h6>').text(`Released in ${movie.year}`);
      const $modalText = $('<p>').text(movie.plot);

      $modalContent.append($modalHeader, $movieYear, $modalText);
      $modal.append($modalContent);

      $col.append($card, $modal);

      $('#listings').append($col);

      $('.modal-trigger').leanModal();
    }
};

  // ADD YOUR CODE HERE


 //- Listen for submissions on the search form. Remember to prevent the default action.
 $('button').click(function(event){
    var input_val = $("#search").val();
    if(input_val === '' ){
      alert("enter valid movie name")

   } else {
      $.getJSON( "http://www.omdbapi.com/?s=" + input_val, function( data ) {
        console.log("getJSON method ", data);
      });
   }




});


  //- Validate the user input is not blank.
 //$('#input_field').on('input', function() {
//	var input=$(this);
//	var is_name=input.val();
//   if(is_name){input.removeClass("invalid").addClass("valid");}
//   else{input.removeClass("valid").addClass("invalid");}
//});

 // - Clear the previous search results.

//- Send an HTTP request to the [OMDB API](http://omdbapi.com/) search endpoint.



//Render `movies` array to page by calling `renderMovies()`function w/no  //arguments.






/*
- Listen for submissions on the search form. Remember to prevent the default action.
- Validate the user input is not blank.
- Clear the previous search results.
- Send an HTTP request to the [OMDB API](http://omdbapi.com/) search endpoint.
- Handle the HTTP response by pushing a new, well-formed `movie` object into the global `movies` array.



- Render the `movies` array to the page by calling the `renderMovies()` function with no arguments.

Each well-formed `movie` object in the `movies` array must have the following key-value pairs.*/
//  `id`     | The movie's unique imdb ID number.  |
//| `poster` | The URL to the movie's poster image |
//| `title`  | The title of the movie.             |
//| `year`   | The year of the movie's release.

})();
