$(document).ready(function() {

  //initial quote
  $('#quotetext').text('“It always seems impossible before it is done.”');

  $('#quoteauthor').text('– Nelson Mandela');

  //call to get quotes

  $("#quotebutton").on("click", function() {
    $.ajax({
      headers: {
        "X-Mashape-Key": 'IhVmVOwricmshyoTy65WI12BITRKp1ZZNVwjsnOLQLiUaYkTrI',
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {

        var obj = JSON.parse(response);
        console.log(obj);

        $('#quotetext').text('"' + obj.quote + '"' + "  ");
        $('#quoteauthor').text("-" + " " + obj.author);

        console.log('#quotetext');
      }
    });

  });

  //function to tweet quotes.
  $('#mytwitterbutton').on('click', tweet)
});

function tweet() {
  var randomQuote = document.getElementById('quotetext').textContent;
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote) +
    '&url=' +
    'https://codepen.io/osania/pen/mAYZVx';

  window.open(tweetUrl);
};
