# Book Nook

## About 

The history of storytelling goes back thousands of years, and is a huge part of culture as we know it. With advancements in technology, the demand for books has steadily decreased. Movies enable the enjoyment of a story in a matter of hours, with pleasant visual and audio representations. However, reading a book provides an experience you simply cannot replicate in movie form - and Book Nook's goal is to help the user achieve that.

"Book Nook" is designed to take the user's love for movies, and help them share that same experience with books. Upon visiting the site, the user will enter a movie they enjoy. In return, Book Nook will randomly generate a book based on the details of the movie entered. This way, the user may retrieve multiple books based on the same movie choice. The most recent search will be saved to local storage, so they can refer to their "library", with future developments.

We utilized multiple API's in order to achieve this functionality. OMDB receives the user's movie selection and returns very useful information - including genre, plot summary and an image to display to the page. The apple iTunes e-book API utilized the information from the user's movie selection, to match with a book of similar genre. In order to display the user's book cover image, we used the Bing image search API. 

The CSS for our page was developed using a CDN from Foundation's framework. In addition, we added our own CSS stylesheet to overwrite and change the generic styling. 

Using jQuery through JavaScript, we were able to make a site that was dynamically responsive to the user. In order to render the screen, we used multiple functions to populate book and movie data.

## Future Development

Future plans for this site include deploying "My Book Nook" and "Library" pages. They would use data from local storage to display saved books and user search history, respectively. 

## Contributors

[Gary Bergman](https://github.com/Gary-Bergman)
[Susan Holland](https://github.com/SEGH)
[Joshua Homer](https://github.com/Jchomer90)
[Andrew Kleiner](https://github.com/akleiner26)

<img src="Assets/screenShots/screenshot1.jpeg" alt="homepage" width="700">
<img src="Assets/screenShots/screenshot2.jpeg" alt="search" width="700">
<img src="Assets/screenShots/screenshot3.jpeg" alt="results" width="700">

