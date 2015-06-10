/** Alter #site-nav classes based on vertical scroll position **/

/*$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > ($('.hero').height() - 50)){
			$('#site-nav').addClass('woosh');
		} else {
			$('#site-nav').removeClass('woosh');
		}
	});
});*/


/* Google Maps */

var ausCenter = new google.maps.LatLng(-25.691038, 134.692383);

function initialize() {
    var mapOptions = {
        center: { lat: -25.691038, lng: 134.692383},
        zoom: 5,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    
    var marker = new google.maps.Marker({
        position: ausCenter,
        map: map,
        title:"CenterOfAus",
        animation: google.maps.Animation.DROP
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
