// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	// Check for enter key
	if(event.which === 13) {
		// Get todo text from input
		let todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$("#plus").click(function() {
	$("input[type='text']").fadeToggle();
});