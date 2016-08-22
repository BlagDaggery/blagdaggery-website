//Add scripts for mobile header design

var main = function() {
	$(document).on("click", "#menu-expand", function() {
		$("#nav").css("display", "block");
		$("#menu-expand").css("display", "none");
		$("#menu-collapse").css("display", "block");
	});

	$(document).on("click", "#menu-collapse", function() {
		$("#nav").css("display", "none");
		$("#menu-collapse").css("display", "none");
		$("#menu-expand").css("display", "inline-block");
	});
}

$(document).ready(main);