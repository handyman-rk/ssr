

function tws(tweet) {
  let twurl = "https://twitter.com/intent/tweet?";
  let text = encodeURIComponent(tweet);
  let url = `${twurl}text=${text}&related=rohitkrops`;
  window.open(url, `Share on Twitter`,"height=500, width=600");
}

module.exports = tws;
