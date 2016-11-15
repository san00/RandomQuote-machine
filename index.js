$(document).ready(function() {
   
   $("#quotebutton").on("click", function() {
     $.ajax({
       headers: {
         "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
         Accept: "application/json",
         "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
       
          var obj = JSON.parse(response);
        console.log(obj);
 
        $('#quotetext').html('"' + obj.quote +'"' + "  "  + obj.author);
        
       console.log('#quotetext');
      }
  });
     
     $('#mytwitterbutton').on('click', tweet)
 });
   
   //  function to send quotes to twitter button
   
  $(".twitter-share-button").on("click", function() {    
  function tweet(){
    var randomQuote = document.getElementById('quotetext').textContent;
    var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote) +
    '.' +
    '&url=' +
    'http://codepen.io/osania/pen/mAYZVx' ;
    console.log(tweetUrl);
    console.log(randomQuote);
    window.open(tweetUrl);
  } 
   
});
