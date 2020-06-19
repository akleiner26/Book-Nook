// AJAX method to get movie data, including genre

function getData(movieTitle) {
    var movieURL = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + movieAPI;

    $.ajax({
        url: movieURL,
        method: "GET"
    }).then((movieData) => {
        // Grab movieGenre to pass to book API
        var movieGenre = movieData.Genre;
        movieGenre = movieGenre.replace(/(, )/g, "+");

        // Display movie data
        renderMovies(movieData);

        // AJAX method to get book data
        var bookLimit = 50;

        $.ajax({
            url: "https://itunes.apple.com/search?term=" + movieGenre + "&entity=ebook&limit=" + bookLimit,
            method: "GET"
        }).then((bookData) => {
            bookData = JSON.parse(bookData);
            var bookDataArray = bookData.results;

            // Randomly select number between 0 and bookData array length
            var randomNum = Math.floor(Math.random() * bookLimit);
            var bookPickData = bookDataArray[randomNum];

            // Display book image and other info
            renderBooks(bookPickData);

        });
    });
}