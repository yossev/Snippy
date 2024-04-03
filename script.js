$(document).ready(function() {
  $('button').click(function(){
      let longUrl = $('input').val(); // Getting the value has to be called to actually get the value
      shortenUrl(longUrl); // call the shorten url method on the LongUrl
  });
});

function shortenUrl(longUrl) {
  const data = {
      url: longUrl,
  };
  axios.post('https://spoo.me/', data, {
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
      },
  })
  .then(function (response) {
      const shortUrl = response.data.short_url;
      $('.shortened-container p').html("✅ Here's Your Short Link! <a href='" + shortUrl + "'>" + shortUrl + "</a> <button class='button' data-clipboard-text='" + shortUrl + "' onclick='showAlert()'><b>Copy</b></button>");
      new ClipboardJS('.shortened-container button');
  })
  .catch(function (error) {
      console.error(error);
  });
}

function showAlert() {
  $('.alert').show();
}
