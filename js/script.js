// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function() {
    var user_search = $("input").val();

    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + user_search + "&rating=pg&api_key=dc6zaTOxFJmzC";

    $.ajax({
        url: request_url,
        method: "GET",
        success: function(response) {
            var pic_url = response.data[0].images.original.url;
            $("#image_display").append("<img src=" + pic_url + ">");
        }
    });

});
