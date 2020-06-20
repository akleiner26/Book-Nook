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
    movieCard.empty();
    movieImg.attr("src", movieData.Poster);
    var actors = `<p>Top Billed Cast: ${movieData.Actors}</p>`;
    movieCard.append(actors);
    movieGenre = movieData.Genre;
    var movieGenreTxt = `<p>${movieGenre}`;
    $(movieCard).append(movieGenreTxt);
    var movieYR = movieData.Year;
    var movieYrTxt = `<p>Release Year: ${movieYR}</p>`;
    movieCard.append(movieYrTxt);
    var moviePlot = movieData.Plot;
    var moviePlotTxt = `<p>Plot: ${moviePlot}</p>`
    movieCard.append(moviePlotTxt);
}

var renderBooks = (bookPickData) => {
    $(bookCard).empty();
    bookTitle.text(bookPickData.trackCensoredName);
    bookImg.attr("src", bookPickData.artworkUrl100);
    var bookGenreTxt = `<p>Book Genre: ${bookPickData.genres[0]}</p>`;
    $(bookCard).append(bookGenreTxt);
    var bookAuthor = `<p>Author: ${bookPickData.artistName}</p>`;
    $(bookCard).append(bookAuthor);
    var bookYr = `<p>Publication Year: ${bookPickData.releaseDate.substring(0,4)}</p>`;
    $(bookCard).append(bookYr);
    var bookPlot = `<p>Plot: ${bookPickData.description}</p>`;
    $(bookCard).append(bookPlot);
}

// Event listener for search button and anon function to run ajax function
$(searchBtn).on("click", function(movieData, bookData){
    getData(searchTxt.val());
    searchTxt.val("");
});
///////////////////////////////////////////////////