//Add scripts for mobile header design


var main = function() {
	$(document).on("click", "#menu-expand", function() {
		$("header > nav > a").css("display", "block");
	});
}

$(document).ready(main);