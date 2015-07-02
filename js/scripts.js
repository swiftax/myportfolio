/* Portfolio */

var portfolioItems = [ { title: "Switfax Project", pic: "img/swiftax.png"},
{ title: "Karma Site", pic: "img/karma-site.png"},
{ title: "Portfolio Project", pic: "img/portfolio-screenshot.png"}, { title: 
"Fourth Project", pic: "img/grocery_app.png"}

];

for (var i = 0; i < portfolioItems.length; ++i) {
	$("#" + i).css("background-image", "url(" + portfolioItems[i].pic + ")");
};

$(".image").mouseenter( function () {
	console.log(portfolioItems[this.id].title);
	$(this).html("<p class='info'><span class='proj-title'>Title:</span> " + portfolioItems[this.id].title + "</p>");


}).mouseleave( function () {
	$("p.info").html("");
});



/* Contact Section */

$(document).ready(function(){

$("#submit-button").on("click" , function() {
	console.log("clicked");
	var comment = $(".message-box").val();
	console.log(comment);
	$("#visible-comment").html(comment);
	return false;
	})

	$(".message-box").css("background-color", "pink");

	$(".message-box").on("keyup", function() {
		console.log("keyup happened!");

		var charCount = $(".message-box").val().length;
		console.log(charCount);
		$("#charCount").html(charCount);

		if (charCount > 150) {
			$("#charCount").css("color", "red").text("You exceeded the maximum character limit");
		} else {
			$("#charCount").css("color", "white");
		};
	});
});
	/* FAQ Section */

	var rows = $(".my-row");

	for (var i=0; i< rows.length; ++i) {
		if (i%2===0) {
	$(rows[i]).css("background-color","pink");
	};
};
	/* Google Maps */

      function initialize() {
        var mapOptions = {
          center: { lat: 26.546482, lng: -80.088786},
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
        	position: map.getCenter(),
        	map: map,
        	title: 'Click to zoom'
        });
        google.maps.event.addListener(marker, 'click', function() {
    		map.setZoom(15);
    		map.setCenter(marker.getPosition());
  		});
      }
      google.maps.event.addDomListener(window, 'load', initialize);







