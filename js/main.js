//Add scripts for mobile header design

var main = function() {
	$(document).on("click", "#menu-link", function() {
		$("#nav").toggle();
	});

}

$(document).ready(main);