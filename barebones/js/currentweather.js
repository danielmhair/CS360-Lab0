$(document).ready(function() {
  $.ajax({
	  url: 'http://api.wunderground.com/api/5b10e216ebae690c/conditions/q/UT/Provo.json',
	  type: "GET",
	  data: { format: 'json' },
	  success: function(data) {
      if (data != null) {
        cities = data.response.results;
      }
      else {
        return new Array();
      }
	  },
	  error: function(data) {
	  },
	  dataType: 'jsonp'
	}).done(function(data) {
    console.log(data);
      var weatherData = data.current_observation;
      if (weatherData != null) {
        var location = weatherData.display_location.full;
        var temp = weatherData.temperature_string;
        var weather = weatherData.weather;
        var weatherDiv = document.getElementById("weather-div");
        emptyChildren(weatherDiv);
        weatherDiv.innerHTML += "<h3>" + temp + "</h3>";
        weatherDiv.innerHTML += "<h3>" + weather + "</h3>";
      }
    });
});

var emptyChildren = function(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}