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
    movieTitleTxt = $(searchTxt).val();
    movieImg.attr("src",movieData.Poster);
    var actors = `<p>${movieData.Actors}</p>`;
    $(movieCard).append(actors);
    movieGenre = movieData.Genre;
    var movieGenreTxt = `<p>${movieGenre}`;
    $(movieCard).append(movieGenreTxt);
    movieYr = movieData.Year;
    var movieYrTxt = `<p>${movieYR}</p>`;
    $(movieCard).append(movieYrTxt);
    var moviePlot = movieData.Plot;
    var moviePlotTxt = `<p>${moviePlot}</p>`
    $(movieCard).append(moviePlotTxt)
}

var renderBooks = (bookData) => {
    $(bookCard).empty();
    bookTitle = bookDataArray.trackCensoredName;
    bookImg.attr("src", bookDataArray.artworkUrl60);
    var bookGenreTxt = `<p>${bookDataArray.genres[0]}</p>`;
    $(bookCard).append(bookGenreTxt);
    var bookAuthor = `<p>${bookDataArray.artistName}</p>`;
    $(bookCard).append(bookAuthor);
    var bookYr = `<p>${bookDataArray.releaseDate.substring(0,3)}</p>`;
    $(bookCard).append(bookYr);
    var bookPlot = `<p>${bookDataArray.description}</p>`;
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