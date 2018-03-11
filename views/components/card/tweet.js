"use strict";

function tws(tweet) {
  var permalink = encodeURIComponent("http://bit.ly/2uCwogr");
  var twurl = "https://twitter.com/intent/tweet?";
  var text = encodeURIComponent(tweet);
  var url = twurl + "text=" + text + "&url=" + permalink + "&related=rohitkrops";
  window.open(url, "Share on Twitter", "height=500, width=600");
}

module.exports = tws;