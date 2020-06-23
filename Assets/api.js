// AJAX method to get movie data, including genre

function getData(movieTitle) {
    var movieURL = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + movieAPI;

    $.ajax({
        url: movieURL,
        method: "GET"
    }).then((movieData) => {
        console.log(movieData);
        // Grab movieGenre to pass to book API
        var movieGenre = movieData.Genre;
        movieGenre = movieGenre.replace(/(, )/g, "+");

        // Display movie data
        renderMovies(movieData);

        // AJAX method to get book data
        var bookLimit = 25;
        var cors = "https://cors-anywhere.herokuapp.com/";
        $.ajax({
            url: cors + "https://itunes.apple.com/search?term=" + movieGenre + "&entity=ebook&limit=" + bookLimit,
            method: "GET"
        }).then((bookData) => {
            bookData = JSON.parse(bookData);
            var bookDataArray = bookData.results;

            // Randomly select number between 0 and bookData array length
            var randomNum = Math.floor(Math.random() * bookLimit);
            var bookPickData = bookDataArray[randomNum];

            // Display book info
            console.log(bookPickData);
            renderBooks(bookPickData);

            // Save titles to local storage
            var movieTitle = movieData.Title;
            var bookTitle = bookPickData.trackCensoredName;
            sendLocalStorage(movieTitle, bookTitle);

            // AJAX method to get book image
            var author = bookPickData.artistName;
            var book = bookPickData.trackCensoredName + "by " + author + " book cover ";
            var bookAPIKey = "3609f30836c8439cb1d9f465c4edfbec";
            var bookImageURL = "https://book-image.cognitiveservices.azure.com/bing/v7.0/images/search?q=" + book + "&count=1";
            var corsHelp = "https://cors-anywhere.herokuapp.com/";
            $.ajax({
                url: corsHelp + bookImageURL,
                method: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader("Ocp-Apim-Subscription-Key", bookAPIKey); }
            }).then((bookImageData) => {
                console.log(bookImageData);
                renderBookImg(bookImageData);
            });
        });
    });
}