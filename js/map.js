'use strict';
(function () {
  // Задание подробности. Выбор адреса
  function draggingLabel() {
    window.map = (function () {
      var map = document.querySelector('.map');
      return map;
    })();
    var mainPin = document.querySelector('.map__pin--main');
    var form = document.querySelector('.notice__form');
    var fieldsets = form.querySelectorAll('fieldset');
    for (var i = 0; i < fieldsets.length; i++) {
      fieldsets[i].removeAttribute('disabled');
    }

    window.map.classList.add('map--faded');
    form.classList.add('notice__form--disabled');

    function onMapMouseup() {
      window.map.classList.remove('map--faded');
      form.classList.remove('notice__form--disabled');
      window.hideMap(window.cityMap);
      window.addPinsToMap(window.mapPins, window.pins);
      window.mapPins.addEventListener('click', onPinClick);
    }
    mainPin.addEventListener('mouseup', onMapMouseup);
  }
  draggingLabel();

  // Задание подробности. Показ/скрытие карточки объявления!
  function resetActivePin() {
    var activePin = document.querySelector('.map__pin--active');
    if (activePin) {
      activePin.classList.remove('map__pin--active');
    }
  }

  function closeCard() {
    var cardElem = document.querySelector('.popup');
    if (cardElem) {
      cardElem.remove();
    }
    resetActivePin();

  }
  function onPinClick(e) {
    var target = e.target;
    while (!target.classList.contains('map__pins')) {
      if (target.classList.contains('map__pin') && !target.classList.contains('map__pin--main')) {

        closeCard();

        target.classList.add('map__pin--active');
        var index = target.getAttribute('data-index');
        var post = window.getPost(window.offers[index]);
        window.cityMap.appendChild(post);
        document.addEventListener('keydown', closeCardEsc);
        var closeButton = document.querySelector('.popup__close');
        closeButton.addEventListener('keydown', closeCardEnter);
        closeButton.addEventListener('click', closeCard);

        break;
      }

      target = target.parentNode;
    }
  }

  var ESC = 27;
  var ENTER = 13;

  function closeCardEsc(e) {
    if (e.keyCode === ESC) {
      closeCard();
    }
  }

  function closeCardEnter(e) {
    if (e.keyCode === ENTER) {
      closeCard();
    }
  }
})();
