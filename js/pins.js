'use strict';
(function () {
  // милый DOM задание 2
  window.cityMap = (function () {
    var cityMap = document.querySelector('section.map');
  });
  var mapPins = cityMap.querySelector('.map__pins');

  function hideMap() {
    cityMap.classList.remove('map--faded');
  }

  // милый DOM задание 3
  function getPin(ad, index) {
    var button = document.createElement('button');
    var img = document.createElement('img');
    button.setAttribute('data-index', index);
    button.classList.add('map__pin');
    button.style.left = ad.offer.location.x + 'px';
    button.style.top = ad.offer.location.y + 'px';
    img.style.width = '40' + 'px';
    img.style.height = '40' + 'px';
    img.draggable = false;
    img.src = ad.author.avatar;
    button.appendChild(img);
    return button;
  }

  // милый DOM задание 4
  function getPins(pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(getPin(pins[i], i));
    }
    return fragment;
  }

  function addPinsToMap(map, pins) {
    window.map.appendChild(pins);
  }
})();
