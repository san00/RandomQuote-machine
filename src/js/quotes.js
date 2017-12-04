$(document).ready(function() {


  //initial quote
  $('#quote-text').text('“It always seems impossible before it is done.”');

  $('#quote-author').text('- Nelson Mandela -');

  //call to get quotes

  $("#quotes-button").on("click", function() {
    $.ajax({
      headers: {
        "X-Mashape-Key": 'IhVmVOwricmshyoTy65WI12BITRKp1ZZNVwjsnOLQLiUaYkTrI',
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        let data = JSON.parse(response);
        $('#quote-text').text('"' + data.quote + '"' + "  ");
        $('#quote-author').text("-" + " " + data.author + " " + "-");

      }
    });
  });

  //function to tweet quotes.
  $('#tweet-button').on('click', tweet)
});

function tweet() {
  var randomQuote = document.getElementById('quote-text').textContent;
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote) +
    '&url=' +
    'https://codepen.io/osania/pen/mAYZVx';

  window.open(tweetUrl);
};

// #FAEEDE this colour was the best for accessibility
// var colours = ["#e8d9dd","#b9e2f2","#f6e781","#faeede"];
//
// $("#quotebutton").on("click", function(){
//   $('.flex-container').css("background-color", colours[Math.floor(Math.random() * colours.length)]);
// })
