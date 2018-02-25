'use strict';
(function () {
  function initFormHandlers() {
    // переменные (форма, адрес...)
    var STANDART_PIN_POSITION = '200, 200';

    var form = document.querySelector('.notice__form');
    var title = form.querySelector('#title');
    var address = form.querySelector('#address');
    var checkInTime = form.querySelector('#timein');
    var checkOutTime = form.querySelector('#timeout');
    var type = form.querySelector('#type');
    var price = form.querySelector('#price');
    var roomNumber = form.querySelector('#room_number');
    var capacity = form.querySelector('#capacity');

    address.setAttribute('value', STANDART_PIN_POSITION);

    title.addEventListener('invalid', function () {
      errorShow(title);
      title.setCustomValidity('');

      if (title.validity.valueMissing) {
        title.setCustomValidity('Заполни меня');
      }
      if (title.validity.tooShort) {
        title.setCustomValidity('Минимальная длина ' + title.getAttribute('minLength') + ' символов');
      }
      if (title.validity.tooLong) {
        title.setCustomValidity('Макcимальная длина ' + title.getAttribute('maxLenght') + ' символов');
      }
      if (title.validity.valid) {
        errorHide(title);
      }
    });

    title.addEventListener('change', function () {
      if (!title.validity.tooShort) {
        errorHide(title);
      }
      if (title.validity.tooLong) {
        errorHide(title);
      }
    });

    function errorShow(element, revertChanges) {
      element.style.border = revertChanges ? '' : '2px solid red';
    }

    function errorHide(element) {
      errorShow(element, true);
    }

    price.addEventListener('invalid', function () {
      errorShow(price);
      price.setCustomValidity('');

      if (price.validity.typeMismatch) {
        price.setCustomValidity('Должны быть только цифры');
      }
      if (price.validity.rangeOverflow) {
        price.setCustomValidity('Не меньше 0');
      }
      if (price.validity.rangeOverflow) {
        price.setCustomValidity('Не больше 1 000 000');
      }
      if (title.validity.valid) {
        errorHide(title);
      }
    });

    price.addEventListener('input', function () {
      errorHide(price);
    });

    title.addEventListener('input', function () {
      errorHide(title);
    });

    // синхронизация времени заезда и выезда
    function timeInChange(e) {
      checkOutTime.value = e.currentTarget.value;
    }
    checkInTime.addEventListener('change', timeInChange);

    function timeOutChange(e) {
      checkInTime.value = e.currentTarget.value;
    }
    checkOutTime.addEventListener('change', timeOutChange);

    // синхронизация типа жилья и минимальной стоимости
    function minPriceChange(e) {
      var PRICE_MAP = {
        'bungalo': 0,
        'flat': 1000,
        'house': 5000,
        'palace': 10000
      };
      price.setAttribute('min', PRICE_MAP[e.currentTarget.value]);
    }
    type.addEventListener('change', minPriceChange);

    // синхронизация количества гостей и комнат!
    function minRoomsChange(e) {
      roomsHideErrors();
      if (e.currentTarget.value === '100') {
        capacity.value = 0;
      } else {
        capacity.value = e.currentTarget.value;
      }
    }

    form.addEventListener('submit', checkErrors);

    function checkErrors(e) {
      var capacityValue = parseInt(capacity.value, 10);
      var roomNumberValue = parseInt(roomNumber.value, 10);
      if ((capacityValue > roomNumberValue) || (capacityValue !== 0 && roomNumberValue === 100)) {
        errorShow(roomNumber);
        errorShow(capacity);
        e.preventDefault();
      }
    }

    capacity.addEventListener('change', roomsHideErrors);

    function roomsHideErrors() {
      errorHide(roomNumber);
      errorHide(capacity);
    }

    roomNumber.addEventListener('change', minRoomsChange);


  }
  initFormHandlers();
})();
