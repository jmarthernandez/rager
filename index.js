function rager(el, action, timeBetween, timesClicked) {
  if (el === undefined || null) el = document.body;

  if (action === undefined || action === null) {
    action = function (a) {
      console.log(a);
    }
  };

  if (timeBetween === undefined) timeBetween = 1000;

  if (timesClicked === undefined) timesClicked = 5;

  // Timer Polyfill
  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }

  var last = Date.now();
  var eventList = [];

  function rageHandler(then, e) {
    var now = Date.now();
    last = now;
    if ((now - then) < timeBetween) {
      eventList.push(e);
      if (eventList.length >= timesClicked) {
        action(eventList);
      }
    } else {
      eventList = [];
    }
  }

  el.addEventListener('click', function (e) {
    console.log('do something');
    rageHandler(last, e);
  });
}

module.exports = rager;
