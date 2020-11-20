// Fixes HTML vulnerabilities
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Converts epoch to date and time
const dateAdjust = function(time) {
  const dateNow = new Date(time *1000);
  return dateNow;
}

// Creates the tweet and all divisions to go with it
const createTweetElement = function(tweet) {
let $tweet = $(`<article class="tweet" id="tweet">
                  <div class="user">
                    <div class="avatar-and-name">
                      <img class="avatar" src=${tweet.user.avatars} style="width:50px;height:50px;">
                      <div class="username">${tweet.user.name}</div>
                    </div>
                    <div class="uid">${tweet.user.handle}</div>
                  </div>
                  <p class="tweet-content">${escape(tweet.content.text)}</p>
                  <div class="date-and-info">
                    <div class="date">${dateAdjust(tweet.created_at)}</div>
                    <div class="icons"><i class="material-icons icon-blue">flag</i><i class="material-icons icon-blue">repeat</i><i class="material-icons icon-blue">favorite</i></div>
                  </div>
                </article>`
                );
  return $tweet;
};


// Renders the first tweets on the page
const renderTweets = function(tweets) {
  if (Array.isArray(tweets)) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#display-tweets').append($tweet);
    }
  } else {
    const $tweet = createTweetElement(tweets);
    $('#display-tweets').append($tweet);
  }
};


const resetCounter = function() {
  let counter = 140;
  $(".counter").text(counter);
}


// Rendering the tweets (see further comments)
$(document).ready(function() {

  // Appends new tweet to initial tweets
  const loadTweet = data => data.pop();
  $.ajax('/tweets', { method: 'GET' })
    .then(renderTweets)
    .catch(err => console.log(err))

  $('form').on("submit", function(event) {
    event.preventDefault();

    // Validating if tweets have a correct wordcount
    const $tweetTxt = $('#tweet-text').val().length
    if ($tweetTxt > 140) {
      $('.error').text("Error: Maximum wordcount exceeded");
      setTimeout(function(){($('.error').text(""))}, 3000);
    } else if ($tweetTxt === 0) {
      $('.error').text("Error: Form cannot be empty");
      setTimeout(function(){($('.error').text(""))}, 3000);
    } else {

      // 1: prevents page from loading,
      // 2: retrieve tweets object
      // 3: append new tweet
      // 4: render all tweets
      // 5: resets form
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize()
      })
      .then(() => $.ajax('/tweets', { method: 'GET' }))
      .then(loadTweet)
      .then(renderTweets)
      .then(() => {
        const $form = $('form');
        $form.trigger('reset');
        resetCounter()
      })

      .catch(err => console.log(err));
    };
  });
});