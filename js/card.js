'use strict';
(function () {
  // милый DOM задание 5
  function getPost(ad) {
    function getApartmentTitleByType(type) {
      switch (type) {
        case 'flat':
          return 'Квартира';
        case 'bungalo':
          return 'Бунгало';
        case 'house':
          return 'Дом';
      }
      return 'Вам обязательно повезет';
    }


    var postTemplate = document.querySelector('template').content.querySelector('.map__card');
    var post = postTemplate.cloneNode(true);

    var title = post.querySelector('h3');
    var address = post.querySelector('p:first-of-type');
    var price = post.querySelector('.popup__price');
    var apartmentType = post.querySelector('h4');
    var rooms = post.querySelector('p:nth-of-type(3)');
    var checking = post.querySelector('p:nth-of-type(4)');
    var features = post.querySelector('ul.popup__features');
    var description = post.querySelector('p:last-of-type');
    var img = post.querySelector('img.popup__avatar');
    for (var i = 0; i < LIST_FEATURES.length; i++) {
      if (ad.offer.features.indexOf(LIST_FEATURES[i]) === -1) {
        features.querySelector('li.feature--' + LIST_FEATURES[i]).remove();
      }
    }

    title.textContent = ad.offer.title;
    address.textContent = ad.offer.address;
    price.textContent = ad.offer.price + ' ₽/ночь';
    apartmentType.textContent = getApartmentTitleByType(ad.offer.type);
    rooms.textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    checking.textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    description.textContent = ad.offer.description;
    img.src = ad.author.avatar;

    return post;
  }
})();
