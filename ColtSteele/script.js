var bdy = document.querySelector("body");
var btn = document.querySelector("button");

btn.addEventListener("click", function() {
	if(bdy.style.background != "purple") {
		bdy.style.background = "purple";
	}
	else {
		bdy.style.background = "white";
	}
});