# rager
A Mini Library for Tracking Angry Users

# Example


```javascript
/**
 * The Rager definition.
 *
 * @param {HTMLElement} el - A DOM element you want to track.
 * @param {Function} action - Executed when user rage clicks.
 * @param {Number} timeBetween - Time period which clicks are held in memory.
 * @param {Number} timesClicked - Number of clicks to invoke the action.
 */
var rager = require('rager');
var el = document.getElementById('annoying-feature');

rager(el, function (events) {
  console.log(events);
  doSomeAnalytics();
  showSomePerceivedPerf();
}, 1000, 5);
```
