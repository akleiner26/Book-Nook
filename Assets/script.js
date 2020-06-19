////////////////////////////////////////////////
//Variables//
var searchTxt = $("#searchTxt");
var searchBtn = $("#searchBtn");
var movieImg = $("#movieImg");
var bookImg = $("#bookImg");
var bookTitle= $("#bookTitle");
var movieTitle= $("#movieTitle");
var movieCard= $("#movieCard");
var bookCard =  $("#bookCard");
// var movieArr = (!savedMovies) ? [] : JSON.parse(savedMovies);
var movieAPI = "f9bb3ed8";
var bookAPI = "HlkvA90diPLiYVjDMkKAw";
var bookSecret = "whjSTLdm1vCndZwtplPVHsUQ0lvXKUefykpQWKdQyw"
var movieTitleTxt= "";
var bookTitleTxt= "";
var movieGenre= "";
var bookGenre= "";
/////////////////////////////////////////////
//Functions

var renderMovies = (movieData) => {
    $(movieCard).empty();
    var movieTitleTxt = $(searchTxt).val();
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

var renderBooks = (bookData) => {
    $(bookCard).empty();
    var bookTitle = dloadBookTitle;
    var bookImg = dloadBookImg;
    var bookGenreTxt = `<p>${dloadbookGenre}</p>`;
    $(bookCard).append(bookGenreTxt);
    var bookAuthor = `<p>${dloadBookAuthor}</p>`;
    $(bookCard).append(bookAuthor);
    var bookYr = `<p>${dloadBookYr}</p>`;
    $(bookCard).append(bookYr);
    var bookPlot = `<p>${dloadBookPlot}</p>`;
    $(bookCard).append(bookPlot);
}

$(searchBtn).on("click", function(movieData, bookData){
    renderMovies();
    renderBooks();
})
///////////////////////////////////////////////////

// Event listener for search button and anon function to set movie title input to variable

// AJAX method to get movie data, including genre

    // Display movie image and other info

    // AJAX method to get book data
        // Randomly select book title from genre category
        // Display book image and other info