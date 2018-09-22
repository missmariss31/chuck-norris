/* Joke generator with jQuery/AJAX */
$(document).ready(function () {
    // set api url to pull jokes from
    $url = "https://api.chucknorris.io/jokes/random";

    // set button click to get joke from api
    $("button.get-joke").click(function() {
        $.get($url, data=>$(".jokes").text(data.value));
    });

});