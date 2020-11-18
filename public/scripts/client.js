/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
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

const createTweetElement = function(tweet) {
let $tweet = $(`<img class="avatar" src=${tweet.user.avatars} style="width:50px;height:50px;">
                <div class="username">${tweet.user.name}</div>
                <div class="uid">${tweet.user.handle}</div>
                <p class="tweet-content">${tweet.content.text}</p>
                <div class="date">${tweet.created_at}</div>`); /* Your code for creating the tweet element */
// ...

return $tweet;
}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready(function() {
  console.log($("#display-tweets"));
  $('#display-tweets').append($tweet); 
})

// const renderTweets = function(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
//   }

// renderTweets(data);