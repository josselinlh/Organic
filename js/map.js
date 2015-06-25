(function(){

	$(document).ready(function()
	{
		var centreCarte = new google.maps.LatLng(50.6340145, 3.0210578,17);
					var optionsCarte = {
						zoom: 17,
						scrollwheel: false,
						center: centreCarte
					};
		var maCarte = new google.maps.Map(document.getElementById("mapMetro"), optionsCarte);
		var marker = new google.maps.Marker({
			position: centreCarte,
			map: maCarte,
			title: 'Organic Truck'
		});
	});
})();
