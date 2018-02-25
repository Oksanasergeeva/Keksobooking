'use strict';
(function () {
// милый DOM задание 1
  var LIST_AVATAR = [1, 2, 3, 4, 5, 6, 7, 8];
  var LIST_APARTMENTS_TYPES = ['flat', 'house', 'bungalo'];
  var LIST_CHECK_IN = ['12:00', '13:00', '14:00'];
  var LIST_CHECK_OUT = ['12:00', '13:00', '14:00'];
  var LIST_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var LIST_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

  function getRandomArrayElement(arr) {
    var indexRandom = getRandom(0, arr.length - 1);
    return arr[indexRandom];
  }

  function getRandomFeatures(arr) {
    var features = [];
    var numbersOfFeatures = getRandom(1, arr.length);
    for (var i = 0; i < numbersOfFeatures; i++) {
      features.push(getRandomUniqueValue(arr));
    }
    return features;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomUniqueValue(arr) {
    return arr.pop();
  }

  function getAds(numbers) {
    var avatarsCopy = LIST_AVATAR.slice();
    var titlesCopy = LIST_TITLES.slice();
    var offers = [];
    for (var i = 0; i < numbers; i++) {
      var locationX = getRandom(300, 900);
      var locationY = getRandom(100, 500);
      var featuresCopy = LIST_FEATURES.slice();
      var ad = {
        'author': {
          'avatar': 'img/avatars/user0' + getRandomUniqueValue(avatarsCopy) + '.png'
        },
        'offer': {
          'title': getRandomUniqueValue(titlesCopy),
          'address': locationX + ',' + locationY,
          'price': getRandom(1000, 1000000),
          'type': getRandomArrayElement(LIST_APARTMENTS_TYPES),
          'rooms': getRandom(1, 5),
          'guests': getRandom(1, 25),
          'checkin': getRandomArrayElement(LIST_CHECK_IN),
          'checkout': getRandomArrayElement(LIST_CHECK_OUT),
          'features': getRandomFeatures(featuresCopy),
          'description': '',
          'photos': [],
          'location': {
            'x': locationX,
            'y': locationY
          }
        }
      };
      offers.push(ad);
    }
    return offers;
  }
})();
