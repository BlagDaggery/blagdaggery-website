var main = function() {
	var content = $(".content");

	$("button").click(function() {
		for (var i = 1; i < 51; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				content.append("<p>FizzBuzz!</p>");
			} else if (i % 5 === 0) {
		        content.append("<p>Buzz!</p>");
		    } else if (i % 3 === 0) {
		        content.append("<p>Fizz!</p>");
		    } else {
		        content.append("<p>" + i + "</p>");
		    }
		};
		$("button").toggle();
	});
}

$(document).ready(main);