// VYI4BFYDHPI0RA6V - apex
var apiKey = "VYI4BFYDHPI0RA6V";
var stockObj;

document.addEventListener("DOMContentLoaded", displayStockData);

function displayStockData() {
	var stockName = document.getElementById("stock-name").innerText.toLowerCase();
	var req = new XMLHttpRequest();

	/* API GET REQUEST */
	if(stockName == "nvidia") {
		req.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=1min&apikey=" + apiKey, true);
		req.addEventListener('load', function() {
			stockObj = JSON.parse(req.responseText)
			displayResults(stockObj);
		});
		req.send(null);
	} 
	else if(stockName == "twitter") {
		console.log("TWITTER");
		req.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TWTR&interval=1min&apikey=" + apiKey, true);
		req.addEventListener('load', function() {
			stockObj = JSON.parse(req.responseText)
			displayResults(stockObj);
		});
		req.send(null);
	} 
}

function displayResults(stockObj) {
	// Display results to page
	let time = stockObj["Meta Data"]["3. Last Refreshed"];
	let currentPrice = stockObj["Time Series (1min)"][time]["1. open"];
	document.getElementById("time").innerText = time;
	document.getElementById("stock-price").innerText = currentPrice;
}

/*
// Twitter

var likes = document.querySelectorAll("span.ProfileTweet-actionCountForPresentation");
var sum = 0;
var likeArr = [];

// Loop through likes nodes and push values to likeArr array.
// Values are comments, retweets, and likes.

for(var i = 0; i < likes.length; i++)
{
	likeArr.push(likes[i].innerHTML);
}

// Loop through likeArr array checking for decimals, 'K', and if empty
// Then, it adds each number to a sum variable.

for(var i = 0; i < likeArr.length; i++)
{
	// If there is a K, remove it. Also delete decimal if there is one.
	if(likeArr[i].indexOf('K') !== -1 && likeArr[i].indexOf('.') !== 1)
	{
		likeArr[i] = likeArr[i].replace('K', '').replace('.', '');
		likeArr[i] = likeArr[i] * 100;
	} 
	else if(likeArr[i].indexOf('K') !== -1)
	{
		likeArr[i] = likeArr[i].replace('K', '');
		likeArr[i] = likeArr[i] * 1000;
	} 
	else if(likeArr[i] === "") 
	{
		likeArr[i] = 0;
	}
	sum += parseInt(likeArr[i]);
}*/

// seeking alpha
//document.querySelectorAll('[data-id="super-quote-52-high"]')[1].innerHTML