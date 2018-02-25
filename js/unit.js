'use strict';
(function () {
  window.getRandom = (function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  });
})();
