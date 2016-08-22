var main = function() {
	var content = $(".content");

	$("#submit").click(function() {

		var value = $("input").val();

		for (var i = 1; i <= value; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				content.append("<p><b>FizzBuzz!</b></p>");
			} else if (i % 5 === 0) {
		        content.append("<p><b>Buzz!</b></p>");
		    } else if (i % 3 === 0) {
		        content.append("<p><b>Fizz!</b></p>");
		    } else {
		        content.append("<p>" + i + "</p>");
		    }
		};
		$("#submit").toggle();
		return false;
	});

	$("#clear").click(function() {
		$(".content").val("");
	});
}

$(document).ready(main);