const db = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




const preventAction = (event, action) => {
  event.preventDefault()

  $
    .ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize()
    })
    .then(res => action(res))
    .catch(err => console.log(err))
}

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
    $
    .ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize()
    })
    console.log($('form').serialize())
  });
  renderTweets(db);
});