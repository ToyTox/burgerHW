var myMap;

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 10,
    controls: ['zoomControl'],
    behaviors: ['drag']
  },{
      searchControlProvider: 'yandex#search'
    });
}