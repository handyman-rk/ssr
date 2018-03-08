/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 84:
/***/ (function(module, exports) {


function qs(q) {
  return document.querySelector(q);
}

function qsa(q) {
  return document.querySelectorAll(q);
}
// function to handle mobile menu actions
const menuToggle = qs(".m-nav-toggle");

function menuhandler() {
  const th = qs('.top-head').classList;
  th.toggle('m-nav-active');
}

menuToggle.onclick = e => {
  menuhandler();
  e.preventDefault();
};

function sharer(url, site) {
  return window.open(url, `Share on ${site}`, "height=500, width=600");
}

// encode URI component function to encode string
function uriec(string) {
  return encodeURIComponent(string);
}

// string adder function to replace blank space wih + in string
function sa(str) {
  return str.replace(/ /g, '+');
}

// sharer onclick event attacher - takes array of nodes and a callback function - for fb and google
function sea(arr, cb) {
  for (let i of arr) {
    i.onclick = e => {
      cb(e);
    };
  }
}

const fbshare = qsa('.btn-facebook');

// facebook share data - models data to be shared on facebook and open sharer window
function fbsd(e) {
  let permalink = uriec(qs("link[rel='canonical']").getAttribute("href"));
  let fburl = "http://www.facebook.com/sharer/sharer.php?s=100";
  let finalurl = `${fburl}&u=${permalink}`;

  sharer(finalurl, "Facebook");
  e.preventDefault();
}

// if sharer is on page attach events
if (fbshare) {
  sea(fbshare, fbsd);
}

const twshare = qsa('.btn-twitter');

// twitter share data - models data to be shared on twitter and open sharer window
function tsd(e, tweet, hashtags) {
  let permalink = uriec(qs("link[rel='canonical']").getAttribute("href"));
  let twurl = "https://twitter.com/intent/tweet?";
  let text = uriec(tweet);
  let tags = sa(hashtags);
  let finalurl = `${twurl}text=${text}&url=${permalink}&hashtags=${tags}&via=idevop&related=idevop`;

  sharer(finalurl, "Twitter");
  e.preventDefault();
}

if (twshare) {
  let tweet, hashtags;
  for (let j of twshare) {
    tweet = j.dataset.tweet;
    hashtags = j.dataset.hashtags;
    j.onclick = e => {
      tsd(e, tweet, hashtags);
    };
  }
}

const gshare = qsa('.btn-gp');

// google plus share data - models data to be shared on google plus and open sharer window
function gsd(e) {
  let permalink = uriec(qs("link[rel='canonical']").getAttribute("href"));
  let gurl = "https://plus.google.com/share?";
  let finalurl = `${gurl}url=${permalink}`;

  sharer(finalurl, "Google Plus");
  e.preventDefault();
}

if (gshare) {
  sea(gshare, gsd);
}

// youtube lazy load script
var yt = qsa(".yt");
if (yt) {
  for (let k of yt) {
    let ply = k.querySelector(".ply-btn");
    ply.addEventListener("click", function () {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + k.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      k.innerHTML = "";
      k.appendChild(iframe);
    });
  }
}

/***/ })

/******/ });