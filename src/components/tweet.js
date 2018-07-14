

function tweet(tweet) {
  let twitterIntentURL = "https://twitter.com/intent/tweet?";
  let text = encodeURIComponent(tweet);
  let url = `${twitterIntentURL}text=${text}&related=rohitkrops`;
  window.open(url, `Share on Twitter`,"height=500, width=600");
}

module.exports = tweet;
