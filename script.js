$('h1').click(function(){
    window.location.href='index.html';
})


// .ready() method makes it so as soon as the DOM is safe to manipulate the this function runs
$(document).ready(function() {
    $('button').click(function(){
        let longUrl = $('input').val(); // Getting the value has to be called to actually get the value
        shortenUrl(longUrl); // call the shorten url method on the LongUrl
    });
});

function shortenUrl(longUrl) {
    $.ajax({
        url: 'https://urlbae.com/api/url/add',
        method: "POST",
        dataType: "json",
        headers: {
          'Authorization': 'Bearer 98baf6fab031f60734e639cf50134100',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credintials': true
        },
        body: JSON.stringify({
          "url": longUrl,
        }),
        success: function(response) {
          if (response.success === 1) {
            alert("Shortened URL:", response.data.url);
          } else {
            console.error("Error:", response.error.msg);
          }
        },
        error: function(xhr, status, error) {
          console.error("Error occurred while fetching the shortened URL:", error);
        }
      });
    
    
}