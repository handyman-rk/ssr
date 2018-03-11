"use strict";

// Function to calculate apps in  each section
function counter(sections) {
  var counts = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      var k = 0;
      if (!i.hs) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = i.apps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var j = _step2.value;

            if (j.hs === undefined || j.hs <= 0) {
              k++;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      counts.push(k);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return counts;
}

// function to total counts
function getTotal(counts) {
  var total = counts.reduce(function (s, v) {
    return s + v;
  }, 0);

  return total;
}

// gets old index and counts array to calculate new start
function nextCount(counts, index) {
  var start = counts.slice(0, index - 1).reduce(function (s, v) {
    return s + v;
  }, 0);

  return start;
}

module.exports = {
  counter: counter,
  getTotal: getTotal,
  nextCount: nextCount
};