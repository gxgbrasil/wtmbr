function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(-14.23500, -51.92528),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var WTMs = [
      ['WTM São Paulo', -23.55052, -46.63331],
      ['WTM Belo Horizonte', -19.91668, -43.93449],
      ['WTM Salvador', -12.97597, -38.50290],
      ['WTM Sorocaba', -23.50153, -47.45256],
      ['WTM Rio de Janeiro', -22.90685, -43.17290],
      ['WTM Manaus', -3.11903,	-60.02173],
      ['WTM Maceió', -9.64985,	-35.70895],
      ['WTM São Luís', -2.53911,	-44.28290]
  ];

  var infoWindowContent = [
      ['<div class="info_content">' +
      '<strong>WTM São Paulo</strong><br>' +
      '<a href="http://www.meetup.com/pt/GDG-SP/">Meetup</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Belo Horizonte</strong><br>' +
      '<a href="http://www.meetup.com/pt/GDG-BH/">Meetup</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Salvador</strong><br>' +
      '<a href="http://www.meetup.com/pt/GDG-Salvador/">Meetup</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Sorocaba</strong><br>' +
      '<a href="http://www.gdgsorocaba.org/">Site</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Rio de Janeiro</strong><br>' +
      '<a href="https://www.facebook.com/wtmRio">Facebook</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Manaus</strong><br>' +
      '<a href="http://www.meetup.com/pt/GDG-Manaus/">Meetup</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM Maceió</strong><br>' +
      '<a href="https://plus.google.com/+GdgmaceioRocksIt">Google+</a>' +
      '</div>'],
      ['<div class="info_content">' +
      '<strong>WTM São Luís</strong><br>' +
      '<a href="https://www.facebook.com/GDGSaoLuis">Facebook</a>' +
      '</div>']
  ];

  var infoWindow = new google.maps.InfoWindow();
  var marker, i;

  for( i = 0; i < WTMs.length; i++ ) {
    var position = new google.maps.LatLng(WTMs[i][1], WTMs[i][2]);
        marker = new google.maps.Marker({
        position: position,
        map: map,
        title: WTMs[i][0]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              infoWindow.setContent(infoWindowContent[i][0]);
              infoWindow.open(map, marker);
          }
      })(marker, i));
    };
}
google.maps.event.addDomListener(window, 'load', initialize);
