/////////////////////////////////////////////
//Variables//
var searchTxt = $("#searchTxt");
var searchBtn = $("#searchBtn");
var movieImg = $("#movieImg");
var bookTitle= $("#bookTitle");
var movieTitle= $("#movieTitle");
var movieCard= $("#movieCard");
var bookCard =  $("#bookCard");
// var movieArr = (!savedMovies) ? [] : JSON.parse(savedMovies);
var movieAPI = "f9bb3ed8";
var bookAPI = "HlkvA90diPLiYVjDMkKAw";
var bookSecret = "whjSTLdm1vCndZwtplPVHsUQ0lvXKUefykpQWKdQyw"
var movieTitle= "";
var bookTitle= "";
var movieGenre= "";
var bookGenre= "";
/////////////////////////////////////////////
//Functions

var renderMovies = (movieTitle) => {
    $(movieCard).empty();
    var movieTitle = $(searchTxt).val();
    var movieImg = dloadMovieImg;
    var actors = `<p>${dloadActors}</p>`;
    $(movieCard).append(actors);
    var movieGenre = dloadMovieGenre;
    var movieGenreTxt = `<p>${movieGenre}`;
    $(movieCard).append(movieGenreTxt);
    var movieYr = dloadMovieYr;
    var movieYrTxt = `<p>${movieYR}</p>`;
    $(movieCard).append(movieYrTxt);
    var moviePlot = dloadMoviePlot;
    var moviePlotTxt = `<p>${moviePlot}</p>`
    $(movieCard).append(moviePlotTxt)
}




// Event listener for search button and anon function to set movie title input to variable

// AJAX method to get movie data, including genre

    // Display movie image and other info

    // AJAX method to get book data
        // Randomly select book title from genre category
        // Display book image and other info