var cityGenerator = function () {
	console.log("pressed");
	$.ajax({
	  url: 'http://ec2-52-88-191-100.us-west-2.compute.amazonaws.com:3003/getcity?q=' + document.getElementById('city-name').value,
	  type: "GET",
	  success: function(data) {
		if (data != null) {
			data = JSON.parse(data);
			return data;
		}
		else {
			return new Array();
		}
	  },
	  error: function(data) {
		  console.log("error:");
		  console.log(data);
		  return data;
	  }
	}).done(function(data) {
        findCity(data);
    });
};

var findCity = function(data) {
    var cities = JSON.parse(data);
    var cityName = document.getElementById('city-name').value.toLowerCase();
    var weatherDiv = document.getElementById("weather-div");
    //Get all the words from the file
    if (cityName == "") {
        emptyChildren(weatherDiv);
        return;
    }

    emptyChildren(weatherDiv);

    //Go through the array and add list elements
    var suggestionsList = document.getElementById("city-suggestions");
    var cityMatch = false;
    if (cities != undefined || cities != null || cities.length > 0) {
        emptyChildren(suggestionsList);

        cities.forEach(function(cityInfo) {
            addSuggestion(suggestionsList, cityInfo.city);
            cityMatch = true;
        });
    }
    if (!cityMatch) {
        emptyChildren(suggestionsList);
        addSuggestion(suggestionsList, "Sorry, no cities in Utah, match your search");
    }
};

var emptyChildren = function(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

var addSuggestion = function(element, text) {
	// Create a new <option> element.
	var option = document.createElement('option');
	// Set the value using the item in the JSON array.
	option.value = text;
	// Add the <option> element to the <datalist>.
	element.appendChild(option);
}

var findWeather = function(event) {
  event.preventDefault();
	$.ajax({
	  url: 'http://api.wunderground.com/api/5b10e216ebae690c/forecast10day/q/UT/' + document.getElementById('city-name').value + '.json',
	  type: "GET",
	  data: { format: 'json' },
	  success: function(data) {
      console.log(data);
		if (data != null) {
			cities = data.response.results;
		}
		else {
			return new Array();
		}
	  },
	  error: function(data) {
      console.log(data);
      emptyChildren(suggestionsList);
      addSuggestion(suggestionsList, "Sorry, no cities in Utah, match your search");
	  },
	  dataType: 'jsonp'
	}).done(function(data) {
  		var weatherDiv = document.getElementById("weather-div");
      var weatherDataDay5 = data.forecast.simpleforecast.forecastday[4];
      var weatherDataDay10 = data.forecast.simpleforecast.forecastday[9];
      if (weatherDataDay5 != null && weatherDataDay10 != null) {
        emptyChildren(weatherDiv);
        weatherDiv.innerHTML = 
          "<div class='bg-primary' style='margin: 10px; padding: 10px; border-radius: 5px;'>"+
            "<h2>5 Days from Now<br />" 
              + weatherDataDay5.date.pretty + 
            "</h2>"+
            "<h3><strong>High: " 
              + weatherDataDay5.high.fahrenheit + 
            " </strong>&#x2109;</h3><h3><strong>Low: " 
              + weatherDataDay5.low.fahrenheit + 
            "</strong> &#x2109;</h3>"+
          "</div>"+
          "<div class='bg-primary' style='margin: 10px; padding: 10px; border-radius: 5px;'>"+
            "<h2>10 Days from Now<br />" 
              + weatherDataDay10.date.pretty + 
            "</h2>"+
            "<h3><strong>High: " 
              + weatherDataDay10.high.fahrenheit + 
            " </strong>&#x2109;</h3><h3><strong>Low: " 
              + weatherDataDay10.low.fahrenheit + 
            " </strong>&#x2109;</h3>"+
          "</div>";
      }
    });
};

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(document).ready(cityGenerator);
$(document).ready(function() {
    var cityNameTextBox = document.getElementById('city-name');
	var weatherButton = document.getElementById("weather-button");
	weatherButton.addEventListener('click', findWeather, false);
    cityNameTextBox.addEventListener('keyup', cityGenerator, false);
});