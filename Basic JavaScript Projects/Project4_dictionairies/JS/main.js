function my_Dictionary() {
    var movie = {
        Title:"Saving Private Ryan"
        Genre:"War/Action"
        Director:"Stephen Speilberg"
        Rating:"R"

    };
    delete movie.Rating;
    document.getElementById("Dictionary").innerHTML = movie.Rating;
}