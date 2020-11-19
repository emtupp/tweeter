const createTweetElement = function(tweet) {
let $tweet = $(`<article class="tweet" id="tweet">
                  <div class="user">
                    <div class="avatar-and-name">
                      <img class="avatar" src=${tweet.user.avatars} style="width:50px;height:50px;">
                      <div class="username">${tweet.user.name}</div>
                    </div>
                    <div class="uid">${tweet.user.handle}</div>
                  </div>
                  <p class="tweet-content">${tweet.content.text}</p>
                  <div class="date-and-info">
                    <div class="date">${tweet.created_at}</div>
                      <div class="icons"><i class="material-icons icon-blue">flag</i><i class="material-icons icon-blue">repeat</i><i class="material-icons icon-blue">favorite</i></div>
                  </div>
                </article>`
                );
  return $tweet;
};

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#display-tweets').append($tweet); 
  }
};

$(document).ready(function() {
  $('form').on("submit", function(event) {
    event.preventDefault();
    const $tweetTxt = $('#tweet-text').val().length
    if ($tweetTxt > 140) {
      alert("Error\nMaximum wordcount exceeded")
    } else if ($tweetTxt === 0) {
      alert('message')
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize()
      })
      .then(() => $.ajax('/tweets', { method: 'GET' }))
      .then(function loadTweets(data) {
        return data
      })
      .then(renderTweets)
      .then(() => {
        const $form = $('form');
        $form.trigger('reset');
      })
      .catch(err => console.log(err))
    }
  });
});