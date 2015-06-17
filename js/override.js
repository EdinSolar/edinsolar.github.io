
/* Smoot scroll to name anchors */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




/* Masonry */

$(document).ready( function() {

    $('.grid').masonry({
        itemSelector: '.grid-block',
        columnWidth: '.grid-sizer',
        percentPosition: true
    }); 
    
});

/* Re-do layout once all images are present: */
imagesLoaded( '.grid', function() {
    $('.grid').masonry('layout');
});




/* Google Maps */
var map;
var nw_bound = new google.maps.LatLng(-12.023203, 129.968262);
var se_bound = new google.maps.LatLng(-36.042437, 139.713135)
var bounds = new google.maps.LatLngBounds();
bounds.extend(nw_bound);
bounds.extend(se_bound);

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: { lat: -25.691038, lng: 134.692383},
        zoom: 12,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    directionsDisplay.setMap(map);
    map.fitBounds(bounds);
}

function calcRoute() {
  var start = "Darwin";
  var end = "Adelaide";
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', calcRoute);

google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.fitBounds(bounds);
});
