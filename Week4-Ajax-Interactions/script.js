/* Weather App Code */
var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";
var weatherObj;

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {
	/* Weather Button Binding */
	document.getElementById("weatherSubmit").addEventListener('click', function(event) {
		var zipName = document.getElementById("zipOrCity").value;
		var req = new XMLHttpRequest();

		/* API GET REQUEST - depends on user input */
		// If the input is a zip code, use zip API
		if(zipName >= 10000 && zipName <= 99999) {
			req.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=" + zipName + "&appid=" + apiKey, true);
			req.addEventListener('load', function() {
				weatherObj = JSON.parse(req.responseText)
				displayResults(weatherObj);
			});
			req.send(null);
		} 
		// User entered a city name, use city API
		else {
			req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + zipName + "&appid=" + apiKey, true);
			req.addEventListener('load', function() {
				weatherObj = JSON.parse(req.responseText)
				displayResults(weatherObj);
			});
			req.send(null);
		}
		event.preventDefault();
	});

	/* POST Form Button Binding */
	document.getElementById("favFoodSubmit").addEventListener('click', function(event) {
		var formElement = document.getElementById("postForm");
		var req = new XMLHttpRequest();
		req.open('POST', 'http://httpbin.org/post', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function() {
			var response = req.responseText;
			document.getElementById("formResults").textContent = response;
		});
		req.send(new FormData(formElement)); // Wasn't sure what to put here
		event.preventDefault();
	});
}

function displayResults(weatherObj) {
	// Display results to page
			let city = weatherObj.name;
			document.getElementById('city').innerHTML = "City: " + city;
			let temp = weatherObj.main.temp;
			// Convert temp to Fahrenheit
			temp = Math.round((temp * (9 / 5)) - 459.67);
			document.getElementById('temp').innerHTML = "Temperature: " + temp + "&deg;F";
			let humidity = weatherObj.main.humidity;
			document.getElementById('humidity').innerHTML = "Humidity: " + humidity + "%";
			console.log(weatherObj);
}


